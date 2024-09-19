import { Session } from "@/app/types/Session";
import React, { FC } from "react";

interface SessionPopupProps {
  session: Session;
}

const SessionPopup: FC<SessionPopupProps> = ({ session }) => {
  return (
    <div className="absolute w-full h-full top-0 bottom-0 flex items-center justify-center pointer-events-none">
      <div className="bg-red-500 p-5">{session.name}</div>
    </div>
  );
};

export default SessionPopup;
