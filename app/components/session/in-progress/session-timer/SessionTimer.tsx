import React from "react";
import CurrentTimeIndicator from "./CurrentTimeIndicator";
import TimelineDisplay from "./TimelineDisplay";

const SessionTimer = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <CurrentTimeIndicator />
          <TimelineDisplay />
        </div>
        <div className="border border-pink-200 text-pink-200 p-2 rounded text-sm">
          13:25
        </div>
      </div>
    </div>
  );
};

export default SessionTimer;
