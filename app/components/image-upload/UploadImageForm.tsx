"use client";
import React, { FC, useRef, useState } from "react";

interface UploadImageFormProps {
  setFile: (file: File | undefined) => void;
  isImgFileType: (file: File) => boolean;
}

const UploadImageForm: FC<UploadImageFormProps> = ({
  setFile,
  isImgFileType,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    const selectedFile = target.files[0];

    // set selected file regardless
    if (selectedFile && isImgFileType(selectedFile)) {
      setFile(target.files[0]);
    } else {
      console.log("invalid img type chosen");
    }
  };

  return (
    <div className="inline">
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        name="image"
        onChange={handleOnChange}
      ></input>

      <button className="font-bold underline inline text-pink-200" onClick={handleFileInputClick}>
        Upload file
      </button>
    </div>
  );
};

export default UploadImageForm;
