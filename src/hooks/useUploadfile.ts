import { useState } from "react";
import { useDropzone } from "react-dropzone";

const useUploadfile = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
    maxSize: 4 * 1024 * 1024, // 4 Mo max
    onDrop: (acceptedFiles) => {
      setAcceptedFiles(acceptedFiles);
    },
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          if (error.code === "file-too-large") {
            alert("La taille du fichier ne doit pas dépasser 4 Mo.");
          } else if (error.code === "file-invalid-type") {
            alert(
              "Type de fichier non supporté. Veuillez choisir une image JPEG, PNG ou GIF."
            );
          }
        });
      });
    },
  });

  const handleResetZone = () => {
    setAcceptedFiles([]);
  };

  return {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    handleResetZone,
  };
};

export default useUploadfile;
