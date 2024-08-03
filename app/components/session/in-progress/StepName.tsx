import { StepType } from "@/app/types/StepType";
import React, { FC, ReactNode } from "react";

interface StepNameProps {
  stepType: StepType;
}

const styles = {
  [StepType.STUDY]: {
    textColour: "text-slate-900",
    backgroundColour: "bg-pink-200",
    border: "",
    stepName: "Study"
  },
  [StepType.CHECK_MISTAKES]: {
    textColour: "text-pink-200",
    backgroundColour: "bg-pink-200/30",
    border: "",
    stepName: "Check mistakes"
  },
  [StepType.BREAK]: {
    textColour: "text-pink-200",
    backgroundColour: "bg-slate-900",
    border: "border border-pink-200",
    stepName: "Break"
  },
  default: {
    textColour: "text-slate-900",
    backgroundColour: "bg-pink-200",
    border: "",
    stepName: "Default"
  },
};

const StepName: FC<StepNameProps> = ({ stepType }) => {
  const { textColour, backgroundColour, border, stepName } =
    styles[stepType] || styles.default;

  return (
    <div className="flex justify-center">
      <div
        className={`${textColour} ${backgroundColour} ${border} px-8 py-4 flex justify-center rounded`}
      >
        <p>{stepName}</p>
      </div>
    </div>
  );
};

export default StepName;
