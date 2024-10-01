import Button from "@/app/components/Button";
import { Session } from "@/app/types/Session";
import { Size } from "@/app/types/Size";
import useClickOutside from "@/app/utils/useClickOutside";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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
      <div
        className="bg-slate-900 p-5 border rounded border-pink-200 w-1/2"
        ref={sessionPopupRef}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl">{session.name}</h2>
          <Button icon={CloseRoundedIcon} size={Size.SMALL} onClick={() => setSessionPopupShown(false)} />
        </div>

        <p>Total time: </p>
        <p>Steps:</p>
      </div>
    </div>
  );
};

export default SessionPopup;
