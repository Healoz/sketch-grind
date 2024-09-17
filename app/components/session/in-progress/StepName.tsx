import { Step } from "@/app/types/Step";
import React, { FC, ReactNode, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useClickOutside from "@/app/utils/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";

interface StepNameProps {
  step: Step;
}

const StepName: FC<StepNameProps> = ({ step }) => {
  const [showDescription, setShowDescripion] = useState(false);

  // refs
  const stepNameRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const elementStyling = step.elementStyling;

  useClickOutside(stepNameRef, showDescription, setShowDescripion, [
    descriptionRef,
  ]);

  return (
    <div className="w-1/2 relative">
      <div
        className={`flex justify-center w-full flex-col rounded relative hover: cursor-pointer`}
        onClick={() =>
          setShowDescripion((prevShowDescription) => !prevShowDescription)
        }
        ref={stepNameRef}
      >
        <div
          className={`text-${elementStyling.textColour} bg-${
            elementStyling.bgColour
          } ${
            elementStyling.borderColour
              ? `border border-${elementStyling.borderColour}`
              : ""
          } px-8 py-4 flex justify-center rounded gap-2 w-full`}
        >
          <p className="select-none">{step.name}</p>
          {showDescription ? (
            <KeyboardArrowUpIcon
              className={`text-${elementStyling.textColour} text-lg h-full hover: cursor-pointer`}
            ></KeyboardArrowUpIcon>
          ) : (
            <KeyboardArrowDownIcon
              className={`text-${elementStyling.textColour} text-lg h-full hover: cursor-pointer`}
            ></KeyboardArrowDownIcon>
          )}
        </div>
      </div>
      <AnimatePresence>
        {showDescription && (
          <motion.div
            key={1}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: { duration: 0.6, type: "spring" },
            }}
            className={`absolute top-full w-full bg-${elementStyling.bgColour} select-none p-6 pt-2 rounded text-sm text-${elementStyling.textColour} origin-top`}
            ref={descriptionRef}
          >
            {step.description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepName;
