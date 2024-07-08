import { StepType } from "@/app/types/StepType";
import React, { FC, ReactNode } from "react";

interface StepNameProps {
  children: ReactNode;
  stepType: StepType;
}

const styles = {
  [StepType.STUDY]: {
    textColour: "text-slate-900",
    backgroundColour: "bg-pink-200",
    border: "",
  },
  [StepType.CHECK_MISTAKES]: {
    textColour: "text-pink-200",
    backgroundColour: "bg-pink-200/30",
    border: "",
  },
  [StepType.BREAK]: {
    textColour: "text-pink-200",
    backgroundColour: "bg-slate-900",
    border: "border border-pink-200",
  },
  default: {
    textColour: "text-slate-900",
    backgroundColour: "bg-pink-200",
    border: "",
  },
};

const StepName: FC<StepNameProps> = ({ children, stepType }) => {
  const { textColour, backgroundColour, border } =
    styles[stepType] || styles.default;

  return (
    <div className="flex justify-center">
      <div
        className={`${textColour} ${backgroundColour} ${border} px-8 py-4 flex justify-center rounded`}
      >
        {children}
      </div>
    </div>
  );
};

export default StepName;
