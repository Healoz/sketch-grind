import React, { FC, useState } from "react";
import MainHeading from "../../../MainHeading";
import SessionTile from "./SessionTile";
import Reference from "../../../Reference";
import SessionInfo from "./SessionInfo";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Session } from "@/app/types/Session";
import SessionPopup from "./SessionPopup";
import useClickOutside from "@/app/utils/useClickOutside";
import { formatTime } from "@/app/utils/formatTime";

interface SessionSelectProps {
  preview: string | ArrayBuffer | null;
  sessions: Session[];
  setCurrentSession: (currentSession: Session) => void;
  getTotalSessionTime: (session: Session) => number;
}

const SessionSelect: FC<SessionSelectProps> = ({
  preview,
  sessions,
  getTotalSessionTime,
}) => {
  const [selectedSession, setSelectedSession] = useState<Session>();
  const [sessionPopupShown, setSessionPopupShown] = useState(false);

  const handleSessionClick = (sessionId: string) => {
    console.log("Session clicked " + sessionId);
    setSessionPopupShown(true);
    const selectedSession = sessions.find(
      (session) => session.id === sessionId
    );
    setSelectedSession(selectedSession);
  };

  const sessionsContent = sessions.map((session, index) => (
    <SessionTile
      key={index}
      session={session}
      handleSessionClick={handleSessionClick}
      getTotalSessionTime={getTotalSessionTime}
    ></SessionTile>
  ));

  // adding create new session div to sessions array
  sessionsContent.unshift(
    <div className="flex flex-col gap-2 border rounded border-pink-200 bg-slate-800 p-4">
      <p>New Session</p>
      <SessionInfo icon={AddRoundedIcon}>Create custom session</SessionInfo>
    </div>
  );

  return (
    <div className="text-pink-200 relative h-full flex flex-col">
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

      <div className="flex flex-col w-full h-full overflow-y-scroll border scrollbar rounded border-pink-200">
        <div className="grid grid-cols-2 gap-6 p-4">{sessionsContent}</div>
      </div>

      {/* Session popup when session clicked */}
      {selectedSession && sessionPopupShown && (
        <SessionPopup
          session={selectedSession}
          sessionPopupShown={sessionPopupShown}
          setSessionPopupShown={setSessionPopupShown}
          totalTime={getTotalSessionTime(selectedSession)}
        />
      )}
    </div>
  );
};

export default SessionSelect;
