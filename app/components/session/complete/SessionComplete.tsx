import React, { FC } from "react";
import MainHeading from "../../MainHeading";
import Button from "../../Button";
import CreateIcon from "@mui/icons-material/Create";
import Reference from "../../Reference";
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { SessionStatus } from "@/app/types/SessionStatus";

interface SessionCompleteProps {
  preview: string | ArrayBuffer | null;
  setSessionStatus: (sessionStatus: SessionStatus) => void;
  setPreview: (preview: string | ArrayBuffer | null) => void;
}



const SessionComplete: FC<SessionCompleteProps> = ({ preview, setSessionStatus, setPreview }) => {

  const resetSession = () => {
    setPreview(null);
    setSessionStatus(SessionStatus.SETUP);
  }

  return (
    <div className="h-full">
      <MainHeading />
      <div className="h-full flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center gap-5">
          <h2 className="text-pink-200 text-2xl mb-3">Session Complete</h2>
          {typeof preview === "string" && <Reference imgUrl={preview} />}
          <Button icon={RestartAltRoundedIcon} onClick={resetSession}>Restart</Button>
        </div>
      </div>
    </div>
  );
};

export default SessionComplete;
