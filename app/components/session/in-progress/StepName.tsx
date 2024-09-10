import { Step } from "@/app/types/Step";
import React, { FC, ReactNode, useState } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

interface StepNameProps {
  step: Step;
}

const StepName: FC<StepNameProps> = ({ step }) => {
  const [showDescription, setShowDescripion] = useState(false);

  const elementStyling = step.elementStyling;

  return (
    <div className="w-1/2 relative">
      <div className={`flex justify-center w-full flex-col rounded relative`}>
        <div
          className={`text-${elementStyling.textColour} bg-${
            elementStyling.bgColour
          } ${
            elementStyling.borderColour
              ? `border border-${elementStyling.borderColour}`
              : ""
          } px-8 py-4 flex justify-center rounded gap-2 w-full`}
        >
          <p>{step.name}</p>
          <InfoRoundedIcon
            className={`text-${elementStyling.textColour} text-lg h-full hover: cursor-pointer`}
            onClick={() =>
              setShowDescripion((prevShowDescription) => !prevShowDescription)
            }
          ></InfoRoundedIcon>
        </div>
      </div>
      {showDescription && (
        <div
          className={`absolute top-full w-full bg-${elementStyling.bgColour} p-3 rounded text-sm text-${elementStyling.textColour}`}
        >
          {step.description}
        </div>
      )}
    </div>
  );
};

export default StepName;
