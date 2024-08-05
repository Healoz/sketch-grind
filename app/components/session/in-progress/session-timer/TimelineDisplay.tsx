import React, { FC } from "react";
import TimeDisplay from "./TimeDisplay";
import Triangle from "../../../../../public/triangle.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Step } from "@/app/types/Step";
import { StepType } from "@/app/types/StepType";

interface TimelineDisplayProps {
  getTotalSessionTime: () => number;
  sessionProgress: number;
  sessionSteps: Step[];
}

const TimelineDisplay: FC<TimelineDisplayProps> = ({
  getTotalSessionTime,
  sessionProgress,
  sessionSteps,
}) => {
  const widthPassed = (sessionProgress / getTotalSessionTime()) * 100 + "%";

  const calculateStepWidth = (step: Step): number => {
    return (step.timeInSeconds / getTotalSessionTime()) * 100;
  };

  const StepDisplay = () => {
    const styles = {
      [StepType.STUDY]: {
        backgroundColour: "bg-pink-200",
        border: "",
      },
      [StepType.CHECK_MISTAKES]: {
        backgroundColour: "bg-pink-200/30",
        border: "",
      },
      [StepType.BREAK]: {
        backgroundColour: "bg-slate-900",
        border: "border border-pink-200",
      },
      default: {
        backgroundColour: "bg-pink-200",
        border: "",
      },
    };
    return (
      <div className="w-full h-3 flex gap-1">
        {sessionSteps.map((step) => {
          // depending on step type display differently
          const { backgroundColour, border } =
            styles[step.stepType] || styles.default;
          return (
            <div
              className={`h-full ${backgroundColour} ${border} rounded`}
              style={{ width: `${calculateStepWidth(step)}%` }}
            ></div>
          );
        })}
        {/* <div className="w-1/2 h-full bg-pink-200 rounded"></div>
        <div className="w-1/6 h-full border border-pink-200 rounded"></div>
        <div className="w-1/3 h-full  bg-pink-200/30 rounded "></div> */}
      </div>
    );
  };

  return (
    <div className="w-full mb-1 relative">
      <motion.div
        className="h-full absolute w-3"
        animate={{
          left: `calc(${widthPassed} - 6px)`, // Adjust the position by subtracting half the triangle width (6px)
          top: -10,
        }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <Image
          src={Triangle}
          width={12}
          height={12}
          alt="Current time indicator"
        />
      </motion.div>
      <motion.div
        className="bg-teal-400 h-full w-full absolute mix-blend-overlay rounded"
        animate={{ width: widthPassed }}
        transition={{ duration: 0.5, ease: "linear" }}
      ></motion.div>
      {/* timeline */}
      <StepDisplay />
    </div>
  );
};

export default TimelineDisplay;
