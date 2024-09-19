import React, { FC } from "react";
import SessionInfo from "./SessionInfo";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import { Session } from "@/app/types/Session";
import { formatTime } from "@/app/utils/formatTime";

interface SessionTileProps {
  session: Session;
  handleSessionClick: (sessionId: string) => void;
  getTotalSessionTime: (session: Session) => number;
}



const SessionTile: FC<SessionTileProps> = ({ session, handleSessionClick, getTotalSessionTime }) => {
  
  const totalSteps = session.steps.length;
  const formattedTime = formatTime(getTotalSessionTime(session));

  return (
    <div
      className="flex flex-col gap-2 border rounded border-pink-200 p-4"
      onClick={() => handleSessionClick(session.id)}
    >
      <p>{session.name}</p>
      <div className="flex justify-between">
        <SessionInfo icon={AccessTimeFilledIcon}>{formattedTime}</SessionInfo>
        <SessionInfo icon={TaskAltRoundedIcon}>{totalSteps}</SessionInfo>
      </div>
    </div>
  );
};

export default SessionTile;
