import { Session } from "@/app/types/Session";
import useClickOutside from "@/app/utils/useClickOutside";
import React, { FC, useRef } from "react";

interface SessionPopupProps {
  session: Session;
  sessionPopupShown: boolean;
  setSessionPopupShown: (sessionPopupShown: boolean) => void;
}

const SessionPopup: FC<SessionPopupProps> = ({
  session,
  sessionPopupShown,
  setSessionPopupShown,
}) => {
  const sessionPopupRef = useRef<HTMLDivElement>(null);
  useClickOutside(sessionPopupRef, sessionPopupShown, setSessionPopupShown, []);

  return (
    <div className="absolute w-full h-full top-0 bottom-0 flex items-center justify-center">
      <div className="bg-red-500 p-5" ref={sessionPopupRef}>
        {session.name}
      </div>
    </div>
  );
};

export default SessionPopup;
