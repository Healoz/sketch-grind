import React, { FC } from "react";
import TimelineDisplay from "./TimelineDisplay";
import TimeDisplay from "./TimeDisplay";
import TimelineControls from "./TimelineControls";
import { Session } from "@/app/types/Session";

interface SessionTimerProps {
  session: Session;
  getTotalSessionTime: () => number;
  sessionProgress: number;
}

const SessionTimer: FC<SessionTimerProps> = ({
  session,
  getTotalSessionTime,
  sessionProgress
}) => {

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    if (hours <= 0) {
      return `${paddedMinutes}:${paddedSeconds}`;
    }
    else {
      return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }

  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        {/* Current time */}
        <TimeDisplay>0:00</TimeDisplay>
        <div className="w-full">
          <TimelineDisplay />
        </div>
        {/* Full time */}
        <TimeDisplay>{formatTime(getTotalSessionTime())}</TimeDisplay>
      </div>
      <TimelineControls />
    </div>
  );
};

export default SessionTimer;
