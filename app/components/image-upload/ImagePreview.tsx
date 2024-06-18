import React, { FC } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "../Button";

interface ImagePreviewProps {
  preview: string | ArrayBuffer | null;
  setPreview: (preview: string | ArrayBuffer | null) => void;
}

const ImagePreview: FC<ImagePreviewProps> = ({ preview, setPreview }) => {
  return (
    <div className="h-full flex flex-col items-center mt-6">
      <h1 className="text-pink-200 text-xl tracking-tight mb-4">
        Reference preview
      </h1>

      {typeof preview === "string" && (
        <div className="w-full flex flex-col items-center">
          <img
            className="border-pink-200 bg-slate-950 border rounded mb-6 object-scale-down max-h-96"
            src={preview}
          ></img>
          <div className="flex gap-8 items-center align-center">
            <Button icon={ArrowBackIcon} onClick={() => setPreview(null)}>Back</Button>
            <Button icon={CreateIcon}>Study Ref</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
