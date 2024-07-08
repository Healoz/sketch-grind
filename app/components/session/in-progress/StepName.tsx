import { StepType } from "@/app/types/StepType";
import React, { FC, ReactNode } from "react";

interface StepNameProps {
  children: ReactNode;
  stepType: StepType;
}

const StepName: FC<StepNameProps> = ({ children }) => {
  return (
    <div className="text-pink-200">{children}</div>
  )
};

export default StepName;
