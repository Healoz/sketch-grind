import React, { FC } from "react";
import TimelineDisplay from "./TimelineDisplay";
import TimeDisplay from "./TimeDisplay";
import TimelineControls from "./TimelineControls";
import { Session } from "@/app/types/Session";
import { Step } from "@/app/types/Step";

interface SessionTimerProps {
  session: Session;
  getTotalSessionTime: () => number;
  sessionProgress: number;
  setSessionRunning: (isRunning: boolean) => void;
  sessionRunning: boolean;
  sessionSteps: Step[];
}

const SessionTimer: FC<SessionTimerProps> = ({
  session,
  getTotalSessionTime,
  sessionProgress,
  setSessionRunning,
  sessionRunning,
  sessionSteps
}) => {
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    if (hours <= 0) {
      return `${paddedMinutes}:${paddedSeconds}`;
    } else {
      return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        {/* Session progress */}
        <TimeDisplay>{formatTime(sessionProgress)}</TimeDisplay>
        <div className="w-full">
          <TimelineDisplay
            getTotalSessionTime={getTotalSessionTime}
            sessionProgress={sessionProgress}
            sessionSteps={sessionSteps}
          />
        </div>
        {/* Full time */}
        <TimeDisplay>{formatTime(getTotalSessionTime())}</TimeDisplay>
      </div>
      <TimelineControls
        setSessionRunning={setSessionRunning}
        sessionRunning={sessionRunning}
      />
    </div>
  );
};

export default SessionTimer;
