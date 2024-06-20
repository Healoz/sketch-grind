"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadImageForm from "./UploadImageForm";
import ImageFileDisplay from "./ImageFileDisplay";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Alert from "../../Alert";
import { FileUploader } from "react-drag-drop-files";

interface UploadImageProps {
  setPreview: (preview: string | ArrayBuffer | null) => void;
}

const UploadImage: FC<UploadImageProps> = ({ setPreview }) => {
  const [file, setFile] = useState<File | undefined>();
  const [alertShowing, setAlertShowing] = useState(false);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log("file dropped");
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
        ref={dropAreaRef}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`border-pink-200 border-2 border-dashed rounded w-full flex justify-center items-center flex-col p-12 mb-4 ${
          isDragging ? 'bg-slate-700' : 'bg-slate-800'
        }`}
      >
        <UploadFileIcon className="text-pink-200 text-5xl pointer-events-none" />
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
              alertTitle="Incorrect file format"
              alertDesc="The file you provided was in the incorrect format. Please provide JPEG, PNG, GIF or TIFF."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadImage;