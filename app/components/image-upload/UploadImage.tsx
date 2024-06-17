"use client";
import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadImageForm from "./UploadImageForm";
import ImageFileDisplay from "./ImageFileDisplay";

const UploadImage = () => {
  const [file, setFile] = useState<File | undefined>();

  const isImgFileType = (file: File): boolean => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/tiff"];
    if (allowedTypes.includes(file.type)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex-grow flex justify-center items-center flex-col">
      <h1 className="text-pink-200 text-xl tracking-tight mb-4">
        Upload reference
      </h1>
      <div className="border-pink-200 border-2 border-dashed rounded w-full flex justify-center items-center flex-col p-12 mb-4">
        <UploadFileIcon className="text-pink-200 text-5xl" />
        <div className="mt-4">
          <p className="text-pink-200 inline">Drag and Drop file here or&nbsp;</p>
          <UploadImageForm setFile={setFile} isImgFileType={isImgFileType} />
        </div>
      </div>
      <div className="w-full mb-4">
        <p className="text-pink-200 text-sm">
          Supported formats: JPEG, PNG, GIF, TIFF
        </p>
        <p className="text-pink-200 text-sm">Maximum size: 25MB</p>
      </div>
      <ImageFileDisplay percentageDone={50} file={file} />
    </div>
  );
};

export default UploadImage;
