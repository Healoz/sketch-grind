import React from "react";
import TimelineDisplay from "./TimelineDisplay";
import TimeDisplay from "./TimeDisplay";
import TimelineControls from "./TimelineControls";

const SessionTimer = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        {/* Current time */}
        <TimeDisplay /> 
        <div className="w-full">
          <TimelineDisplay />
        </div>
        {/* Full time */}
        <TimeDisplay />
      </div>
      <TimelineControls />
    </div>
  );
};

export default SessionTimer;
