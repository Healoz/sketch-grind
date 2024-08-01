import React, { FC } from "react";
import TimeDisplay from "./TimeDisplay";
import Triangle from "../../../../../public/triangle.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineDisplayProps {
  getTotalSessionTime: () => number;
  sessionProgress: number;
}

const TimelineDisplay: FC<TimelineDisplayProps> = ({ getTotalSessionTime, sessionProgress }) => {

  const widthPassed = ((sessionProgress / getTotalSessionTime()) * 100) + "%";

  return (
    <div className="w-full mb-1 relative">
      <motion.div
        className="h-full absolute w-3"
        animate={{
          left: `calc(${widthPassed} - 6px)`, // Adjust the position by subtracting half the triangle width (6px)
          top: -10,
        }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <Image
          src={Triangle}
          width={12}
          height={12}
          alt="Current time indicator"
        />
      </motion.div>

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
