import Button from "@/app/components/Button";
import { Session } from "@/app/types/Session";
import { Size } from "@/app/types/Size";
import { formatTime } from "@/app/utils/formatTime";
import useClickOutside from "@/app/utils/useClickOutside";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { FC, useRef } from "react";
import SessionInfo from "./SessionInfo";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StepName from "../../in-progress/StepName";

interface SessionPopupProps {
  session: Session;
  sessionPopupShown: boolean;
  setSessionPopupShown: (sessionPopupShown: boolean) => void;
  totalTime: number;
}

const SessionPopup: FC<SessionPopupProps> = ({
  session,
  sessionPopupShown,
  setSessionPopupShown,
  totalTime,
}) => {
  const sessionPopupRef = useRef<HTMLDivElement>(null);
  useClickOutside(sessionPopupRef, sessionPopupShown, setSessionPopupShown, []);

  const formattedTime = formatTime(totalTime);

  const steps = session.steps.map((step, index) => (
    <div className="border rounded border-pink-200 p-3" key={index}>
      <div className="flex justify-between mb-2">
        <p className="font-bold">{step.name}</p>
        <SessionInfo icon={AccessTimeFilledIcon}>
          {formatTime(step.timeInSeconds)}
        </SessionInfo>
      </div>

      <p className="text-sm">{step.description}</p>
    </div>
  ));

  return (
    <div className="absolute w-full h-full flex items-center justify-center ">
      <div
        className="bg-slate-900 p-5 border rounded border-pink-200 w-4/5"
        ref={sessionPopupRef}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl">{session.name}</h2>
          <Button
            icon={CloseRoundedIcon}
            size={Size.SMALL}
            onClick={() => setSessionPopupShown(false)}
          />
        </div>

        <SessionInfo icon={AccessTimeFilledIcon}>{formattedTime}</SessionInfo>
        <h4 className="text-lg mt-4 mb-4 ">Steps</h4>
        <div className="grid grid-cols-1 gap-4 ">{steps}</div>
      </div>
    </div>
  );
};

export default SessionPopup;
