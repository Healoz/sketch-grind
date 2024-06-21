import React from "react";

const TimelineDisplay = () => {
  return (
    <div className="w-full h-3 flex gap-1">
      <div className="w-1/2 h-full bg-pink-200 rounded"></div>
      <div className="w-1/6 h-full border border-pink-200 rounded"></div>
      <div className="w-1/3 h-full  bg-pink-200/30 rounded"></div>
    </div>
  );
};

export default TimelineDisplay;
