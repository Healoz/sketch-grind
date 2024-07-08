import React from "react";
import TimeDisplay from "./TimeDisplay";
import Triangle from "../../../../../public/triangle.svg";
import Image from "next/image";

const TimelineDisplay = () => {
  const percentageTimePassed = 0;

  const widthPassed = (percentageTimePassed / 100) * 100 + "%";

  return (
    <div className="w-full mb-1 relative">
      <div
        className="h-full absolute w-3"
        style={{
          left: `calc(${widthPassed} - 6px)`, // Adjust the position by subtracting half the triangle width (6px)
          top: -10,
        }}
      >
        <Image
          src={Triangle}
          width={12}
          height={12}
          alt="Current time indicator"
        />
      </div>

      {/* timeline */}
      <div className="w-full h-3 flex gap-1">
        <div className="w-1/2 h-full bg-pink-200 rounded"></div>
        <div className="w-1/6 h-full border border-pink-200 rounded"></div>
        <div className="w-1/3 h-full  bg-pink-200/30 rounded "></div>
      </div>
    </div>
  );
};

export default TimelineDisplay;
