"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import UploadImageForm from "./UploadImageForm";
import ImageFileDisplay from "./ImageFileDisplay";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Alert from "@/app/components/Alert";
import { FileUploader } from "react-drag-drop-files";

interface UploadImageProps {
  setPreview: (preview: string | ArrayBuffer | null) => void;
}

const UploadImage: FC<UploadImageProps> = ({ setPreview }) => {
  const [file, setFile] = useState<File | undefined>();
  const [alertShowing, setAlertShowing] = useState(false);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (alertShowing) {
      const timer = setTimeout(() => {
        setAlertShowing(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertShowing]);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    console.log(files);

    // validate the file is correct
    if (files.length > 0) {
      const droppedFile = files[0];
      const acceptedFileTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/tiff",
      ];
      const maxFileSize = 25 * 1024 * 1024; // 25MB
      if (!acceptedFileTypes.includes(droppedFile.type)) {
        setAlertShowing(true);
        return;
      }

      if (droppedFile.size > maxFileSize) {
        setAlertShowing(true);
        return;
      }

      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="flex-grow flex items-center flex-col mt-16 w-full">
      <h1 className="text-pink-200 text-xl tracking-tight mb-4">
        Upload reference
      </h1>
      {/* <FileUploader className="border-pink-200"/> */}
      <motion.div
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`border-pink-200 border-2 border-dashed rounded w-full flex justify-center items-center flex-col p-12 mb-4 ${
          isDragging ? "bg-slate-700" : "bg-slate-800"
        }`}
      >
        <UploadFileRoundedIcon className="text-pink-200 text-5xl pointer-events-none" />
        <div className="mt-4 pointer-events-none">
          <p className="text-pink-200 inline">
            Drag and Drop file here or&nbsp;
          </p>

          <UploadImageForm setFile={setFile} setPreview={setPreview} />
        </div>
      </motion.div>
      <div className="w-full mb-4">
        <p className="text-pink-200 text-sm">
          Supported formats: JPEG, PNG, GIF, TIFF
        </p>
        <p className="text-pink-200 text-sm">Maximum size: 25MB</p>
      </div>
      <AnimatePresence>
        {alertShowing && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Alert
              alertTitle="Incorrect file"
              alertDesc="The file you provided was either too big or the wrong type."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadImage;
