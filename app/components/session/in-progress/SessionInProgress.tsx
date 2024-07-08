import React, { FC } from "react";
import SessionTimer from "./session-timer/SessionTimer";
import StepName from "./StepName";
import { StepType } from "@/app/types/StepType";
import ImagePreview from "../setup/image-upload/ImagePreview";
import Reference from "../../Reference";

interface SessionInProgressProps {
  preview: string | ArrayBuffer | null;
}

const SessionInProgress: FC<SessionInProgressProps> = ({ preview }) => {
  return (
    <div className="flex flex-col h-full justify-between py-6">
      <StepName stepType={StepType.STUDY}>Step name</StepName>
      <div className="w-full flex justify-center">{typeof preview === "string" && <Reference imgUrl={preview} />}</div>

      <SessionTimer />
    </div>
  );
};

export default SessionInProgress;
