import React, { FC } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@/app/components/Button";
import Reference from "@/app/components/Reference";
import { SessionStatus } from "@/app/types/SessionStatus";

interface ImagePreviewProps {
  preview: string | ArrayBuffer | null;
  setPreview: (preview: string | ArrayBuffer | null) => void;
  setSessionStatus: (sessionStatus: SessionStatus) => void;
}

const ImagePreview: FC<ImagePreviewProps> = ({
  preview,
  setPreview,
  setSessionStatus
}) => {
  return (
    <div className="h-full flex flex-col items-center mt-6">
      <h1 className="text-pink-200 text-xl tracking-tight mb-4">
        Reference preview
      </h1>

      {typeof preview === "string" && (
        <div className="w-full flex flex-col items-center">
          <Reference imgUrl={preview} />

          <div className="flex gap-8 items-center align-center">
            <Button icon={ArrowBackIcon} onClick={() => setPreview(null)}>
              Back
            </Button>
            <Button icon={CreateIcon} onClick={() => setSessionStatus(SessionStatus.SESSION_SELECT)}>
              Study Ref
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
