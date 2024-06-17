import React, { FC } from "react";

interface ImagePreviewProps {
  preview: string | ArrayBuffer | null;
}

const ImagePreview: FC<ImagePreviewProps> = ({ preview }) => {
  return (
    <div className="h-full flex flex-col items-center mt-6">
      <h1 className="text-pink-200 text-xl tracking-tight mb-4">
        Reference preview
      </h1>

      {typeof preview === "string" && (
        <img
          className="border-pink-200 bg-slate-950 border rounded mb-6 object-scale-down max-h-96"
          src={preview}
        ></img>
      )}
    </div>
  );
};

export default ImagePreview;
