import React, { FC } from "react";
import SessionInfo from "./SessionInfo";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

interface SessionTileProps {
  name: string;
}

const SessionTile: FC<SessionTileProps> = ({ name }) => {
  return (
    <div className="flex flex-col gap-2 border rounded border-pink-200 p-4">
      <p>{name}</p>
      <div className="flex justify-between">
        <SessionInfo icon={AccessTimeFilledIcon}>10:27</SessionInfo>
        <SessionInfo icon={TaskAltRoundedIcon}>3 steps</SessionInfo>
      </div>
    </div>
  );
};

export default SessionTile;
