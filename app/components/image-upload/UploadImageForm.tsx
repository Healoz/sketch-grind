"use client";
import React, { FC, useRef, useState } from "react";

interface UploadImageFormProps {
  setFile: (file: File | undefined) => void;
  setPreview: (preview: string | ArrayBuffer | null) => void;
}

const UploadImageForm: FC<UploadImageFormProps> = ({
  setFile,
  setPreview
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

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

    const file = new FileReader;

    file.onload = function() {
      console.log('file', file.result);
      setPreview(file.result);
    }

    file.readAsDataURL(selectedFile);

    if (selectedFile) {
      setFile(target.files[0]);
    } else {
      // show alert
      console.log("invalid img type chosen");
    }
  };

  return (
    <div className="inline">
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/tiff"
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
