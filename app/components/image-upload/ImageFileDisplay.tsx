import React, { FC } from "react";
import ProgressBar from "./ProgressBar";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";

interface ImageFileDisplayProps {
  percentageDone: number;
  file: File | undefined;
}

interface FileNameParts {
  name: string;
  extension: string;
}

const getFilenameAndExtension = (fileName: string): FileNameParts => {
  const parts = fileName.split(".");
  const extension = parts.pop() || ""; // Remove and return the extension, or empty string if no extension
  const name = parts.join("."); // Join the remaining parts as the name

  return { name, extension };
};

const ImageFileDisplay: FC<ImageFileDisplayProps> = ({
  percentageDone,
  file,
}) => {
  return (
    <div className="border-pink-200 border rounded w-full p-6 flex flex-col gap-3">
      {file && (
        <>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <ImageIcon className="text-pink-200 text-4xl h-full" />
              <div className="flex flex-col">
                <p className="text-pink-200 line-clamp-1">
                  {getFilenameAndExtension(file.name).name}
                </p>
                <div className="flex gap-2">
                  <p className="text-pink-200 text-sm">
                    {(file.size / (1024 * 1024)).toFixed(2)}MB
                  </p>
                  <p className="text-pink-200 text-sm"> | </p>
                  <p className="text-pink-200 text-sm uppercase">{getFilenameAndExtension(file.name).extension}</p>
                </div>
              </div>
            </div>
            <button className="border border-pink-200 rounded-full aspect-square flex justify-center items-center">
              <DeleteIcon className="text-pink-200 text-xl h-full" />
            </button>
          </div>
          <ProgressBar percentageDone={percentageDone} />
        </>
      )}
    </div>
  );
};

export default ImageFileDisplay;
