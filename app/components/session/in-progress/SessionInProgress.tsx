import React, { FC, useState } from "react";
import SessionTimer from "./session-timer/SessionTimer";
import StepName from "./StepName";
import { StepType } from "@/app/types/StepType";
import ImagePreview from "../setup/image-upload/ImagePreview";
import Reference from "../../Reference";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "../../Button";
import { Size } from "@/app/types/Size";
import { Session } from "@/app/types/Session";

interface SessionInProgressProps {
  preview: string | ArrayBuffer | null;
  session: Session;
  getTotalSessionTime: () => number;
}

const SessionInProgress: FC<SessionInProgressProps> = ({
  preview,
  session,
  getTotalSessionTime,
}) => {
  const [sessionProgressInSecs, setSessionProgressInSecs] = useState(0);

  return (
    <div className="flex flex-col h-full justify-between py-6">
      <div className="flex w-full justify-between items-center">
        <Button icon={CloseRoundedIcon} />
        <StepName stepType={StepType.STUDY}>Step name</StepName>
        <div className="w-[66px]"></div>
      </div>
      <div className="w-full flex justify-center">
        {typeof preview === "string" && (
          <div>
            <div className="mb-4">
              <Button icon={ContentCopyRoundedIcon} size={Size.SMALL}></Button>
            </div>

            <Reference imgUrl={preview} />
          </div>
        )}
      </div>
      <SessionTimer
        session={session}
        getTotalSessionTime={getTotalSessionTime}
        sessionProgressInSecs={sessionProgressInSecs}
      />
    </div>
  );
};

export default SessionInProgress;
