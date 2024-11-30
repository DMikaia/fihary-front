"use client";

import { captureScreenshot, detectFace } from "@/lib/facial";
import React, { FC, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

interface FacialWebcamProps {
    handleAuthentificated: (state: string) => void;
    isReady: boolean
}

const FacialWebcam: FC<FacialWebcamProps> = ({ handleAuthentificated, isReady }): JSX.Element => {
    const webcamRef = useRef<Webcam | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isAuthentificated, setAuthentificated] = useState<string>("");
    let detectionInterval: NodeJS.Timeout | null = null;
    const [isDetected, setIsDetected] = useState(false);

    const startDetection = async () => {
        if (isReady && webcamRef.current && canvasRef.current) {
            detectionInterval = setInterval(async () => {
                await detectFace(webcamRef, canvasRef, setIsDetected);
            }, 300);
        }
    };

    const checkDetected = async () => {
        if (isDetected) {
            console.log("Face detected, capturing screenshot...");
            await captureScreenshot(webcamRef, canvasRef, setAuthentificated);
        }
    };

    useEffect(() => {
        startDetection();

        return () => {
            detectionInterval && clearInterval(detectionInterval);
        };
    }, [isReady]);

    useEffect(() => {
        console.log("useEffect: checkDetected");
        checkDetected();
    }, [isDetected]);


    useEffect(() => {
        handleAuthentificated(isAuthentificated);
    }, [isAuthentificated, handleAuthentificated]);

    console.log("Authentificated state: ", isAuthentificated);

    return (
        <div className="relative w-full h-full z-20">
            <Webcam
                ref={webcamRef}
                className="webcam w-full h-full absolute top-0 left-0 rounded-xl"
                screenshotFormat="image/jpeg"
                style={{ height: "100%", objectFit: "cover" }}
            />
            <canvas
                ref={canvasRef}
                className="output_canvas w-full h-full absolute top-0 left-0 rounded-xl"
                style={{ height: "100%", objectFit: "cover" }}
            />
        </div>
    );
};

export default FacialWebcam;