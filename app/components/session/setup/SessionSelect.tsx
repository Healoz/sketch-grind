import React, { FC } from "react";
import MainHeading from "../../MainHeading";
import SessionTile from "./session-select/SessionTile";
import Reference from "../../Reference";
import SessionInfo from "./session-select/SessionInfo";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface SessionSelectProps {
  preview: string | ArrayBuffer | null;
}

const SessionSelect: FC<SessionSelectProps> = ({ preview }) => {
  const testSessions = [
    "session 1",
    "session 2",
    "session 3",
    "session 4",
    "session 5",
  ];

  const sessions = testSessions.map((session, index) => (
    <SessionTile key={index} name={session}></SessionTile>
  ));

  sessions.unshift(<div className="flex flex-col gap-2 border rounded border-pink-200 bg-slate-800 p-4">
    <p>New Session</p>
    <SessionInfo icon={AddRoundedIcon}>Create custom session</SessionInfo>
  </div>)

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
        <div className="grid grid-cols-2 gap-6">{sessions}</div>
      </div>

      {/* Session popup when session clicked */}
    </div>
  );
};

export default SessionSelect;
