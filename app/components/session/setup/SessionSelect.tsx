import React, { FC } from "react";
import MainHeading from "../../MainHeading";
import SessionTile from "./session-select/SessionTile";
import Reference from "../../Reference";
import SessionInfo from "./session-select/SessionInfo";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Session } from "@/app/types/Session";

interface SessionSelectProps {
  preview: string | ArrayBuffer | null;
  sessions: Session[];
  setCurrentSession: (currentSession: Session) => void;
  getTotalSessionTime: (session: Session) => number;
}

const SessionSelect: FC<SessionSelectProps> = ({ preview, sessions, getTotalSessionTime }) => {

  const handleSessionClick = (sessionId: string) => {
    console.log("Session clicked");
  }

  const testSessions = [
    "session 1",
    "session 2",
    "session 3",
    "session 4",
    "session 5",
  ];

  const sessionsContent = sessions.map((session, index) => (
    <SessionTile key={index} session={session}></SessionTile>
  ));

  // adding new session div to sessions array
  sessionsContent.unshift(
    <div className="flex flex-col gap-2 border rounded border-pink-200 bg-slate-800 p-4">
      <p>New Session</p>
      <SessionInfo icon={AddRoundedIcon}>Create custom session</SessionInfo>
    </div>
  );

  return (
    <div className="text-pink-200 relative">
      <MainHeading />
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl tracking-tight justify-center flex mb-6">
          Session Select
        </h1>
        {typeof preview === "string" && (
          <div className="w-1/3">
            <Reference imgUrl={preview} />
          </div>
        )}
      </div>

      <div className="flex justify-center flex-col w-full">
        <div className="grid grid-cols-2 gap-6">{sessionsContent}</div>
      </div>

      {/* Session popup when session clicked */}
    </div>
  );
};

export default SessionSelect;
