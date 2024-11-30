"use client";

import { FC, Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useUploadfile from "@/hooks/useUploadfile";
import { Upload, X } from "lucide-react";

interface DragAndDropProps {
  onFileSelect: (file: File) => void;
}

const DragAndDrop: FC<DragAndDropProps> = ({ onFileSelect }): JSX.Element => {
  const [uploaded, setUploaded] = useState<boolean>(false);
  const {
    acceptedFiles,
    getInputProps,
    getRootProps,
    isDragActive,
    handleResetZone,
  } = useUploadfile();

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
      setUploaded(true);
    }
  }, [acceptedFiles, onFileSelect]);

  const handleReset = () => {
    handleResetZone();
    setUploaded(false);
  };

  return (
    <Fragment>
      {uploaded ? (
        <div
          className="w-full h-[300px] rounded-lg bg-cover border border-secondary flex justify-end  items-center p-4"
          style={{
            backgroundImage: `url("${URL.createObjectURL(acceptedFiles[0])}")`,
          }}
        >
          <Button
            className="rounded-full h-[45px] w-[45px] opacity-80"
            onClick={handleReset}
          >
            <X />
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps({
            className: `dropzone w-full h-[230px] p-6 flex flex-col justify-center border-2 border-dashed rounded-lg text-center cursor-pointer bg-input ${
              isDragActive ? "border-primary" : "border-[#808080]/30"
            }`,
          })}
        >
          <input {...getInputProps()} />
          <div className="content flex flex-col items-center px-5 gap-5">
            <Upload size={50} color="#282828" />
            <p className="text-secondary">
              {isDragActive
                ? "Relâchez vos fichiers ici..."
                : "Glissez et déposez vos fichiers ici, ou cliquez ici !"}
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DragAndDrop;
