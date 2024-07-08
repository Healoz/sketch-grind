import React from "react";
import TimelineDisplay from "./TimelineDisplay";
import TimeDisplay from "./TimeDisplay";

const SessionTimer = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        {/* Current time */}
        <TimeDisplay /> 
        <div className="w-full">
          <TimelineDisplay />
        </div>
        {/* Full time */}
        <TimeDisplay />
      </div>
    </div>
  );
};

export default SessionTimer;
