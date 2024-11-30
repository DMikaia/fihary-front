import { base64ToFile } from "@/helpers/file-helper";
import authServices from "@/services/auth.services";
import * as faceapi from "face-api.js";
import Webcam from "react-webcam";

const loadModels = async () => {
  const MODEL_URL = "/models";
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
};

const detectFace = async (
  webCamRef: React.RefObject<Webcam> | null,
  canvasRef: React.RefObject<HTMLCanvasElement> | null,
  setIsDetected: React.Dispatch<React.SetStateAction<boolean>>,
  retryInterval = 500
) => {
  if (webCamRef?.current && canvasRef?.current) {
    const video = webCamRef.current.video;

    if (video && video.readyState === 4) {
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };

      faceapi.matchDimensions(canvasRef.current, displaySize);

      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

      const validDetections = detections.filter((d) => d.detection.box);

      if (validDetections.length === 0) {
        setTimeout(
          () => detectFace(webCamRef, canvasRef, setIsDetected),
          retryInterval
        );
        return;
      }

      const resizedDetections = faceapi.resizeResults(
        validDetections,
        displaySize
      );

      if (canvasRef.current) {
        const context = canvasRef.current.getContext("2d");
        context?.clearRect(0, 0, displaySize.width, displaySize.height);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

        if (resizedDetections.length > 0) {
          setIsDetected(true);
        }
      }
    } else {
      setTimeout(
        () => detectFace(webCamRef, canvasRef, setIsDetected),
        retryInterval
      );
    }
  }
};

const stopCamera = (webcamRef: React.RefObject<Webcam> | null) => {
  if (webcamRef?.current && webcamRef.current.video) {
    const stream = webcamRef.current.video.srcObject;
    if (stream instanceof MediaStream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
        console.log("Track stopped:", track);
      });
      webcamRef.current.video.srcObject = null;
    }
  }
};

const captureScreenshot = async (
  webCamRef: React.RefObject<Webcam> | null,
  canvasRef: React.RefObject<HTMLCanvasElement> | null,
  setAuthentificated: React.Dispatch<React.SetStateAction<string>>
) => {
  if (webCamRef && webCamRef.current && canvasRef && canvasRef.current) {
    const image = webCamRef.current.getScreenshot();

    if (image) {
      const response = await authServices.FacialRecognition(
        await base64ToFile(image, "profile-image.webp")
      );
      console.log(response);

      if (response.status === 200) {
        setAuthentificated(response.message as string);
        console.log("Authentication successful");
      } else if (response.status === 400) {
        setAuthentificated(response.message as string);
        console.log("Error when Authentication");
      }
    }
  }
};

const loadAndSetReady = async (
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log("Loading models...");
  await loadModels();
  console.log("Models loaded");

  setTimeout(() => {
    console.log("Setting isReady to true");
    setIsReady(true);
  }, 5400);
};

export {
  detectFace,
  loadModels,
  stopCamera,
  captureScreenshot,
  loadAndSetReady,
};
