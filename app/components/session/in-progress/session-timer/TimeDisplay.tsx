import React, { FC } from "react";

interface TimeDisplayProps {
  children: React.ReactNode;
}

const TimeDisplay: FC<TimeDisplayProps> = ({ children }) => {
  return (
    <div className=" text-pink-200">
      {children}
    </div>
  );
};

export default TimeDisplay;
