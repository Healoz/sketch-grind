import React, { FC, useEffect, useState } from "react";
import SessionTimer from "./session-timer/SessionTimer";
import StepName from "./StepName";
import { StepType } from "@/app/types/StepType";
import ImagePreview from "../setup/image-upload/ImagePreview";
import Reference from "../../Reference";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "../../Button";
import { Size } from "@/app/types/Size";
import { Session } from "@/app/types/Session";

interface SessionInProgressProps {
  preview: string | ArrayBuffer | null;
  session: Session;
  getTotalSessionTime: () => number;
}

const SessionInProgress: FC<SessionInProgressProps> = ({
  preview,
  session,
  getTotalSessionTime
}) => {
  const [sessionRunning, setSessionRunning] = useState(false);
  const [sessionProgress, setSessionProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeForNextStep, setTimeForNextStep] = useState(0);

  // run timer if session is running
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (sessionRunning) {
      // increment the overall timer by 0.5 of a second
      interval = setInterval(() => {
        setSessionProgress((prevSessionProgress) => prevSessionProgress + 0.5);
      }, 500);

    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sessionRunning]);

  // check every second if the current time has passed the time needed for next step
  // if it has, pause the timer and increment the currentStepIndex
  useEffect(() => {
    
    if (sessionRunning && sessionProgress >= timeForNextStep) {
      setSessionRunning(false);
      // Add a small delay before incrementing the step index to avoid premature changes
      setTimeout(() => {
        setCurrentStepIndex((prevCurrentStepIndex) => {
          console.log("Incrementing step index:", prevCurrentStepIndex + 1);
          return prevCurrentStepIndex + 1;
        });
      }, 500) 
    }
  }, [sessionProgress])

  // everytime the currentStepIndex changes, find the new goal for the timeForNextStep. 
  
  useEffect(() => {
    console.log("Current Step Index changed:", currentStepIndex);
    setTimeForNextStep(calculateElapsedTimeForStep(currentStepIndex));

    // if user has skipped manually, need to change current time (use calculatedtimeforStep)
    setSessionProgress(calculateElapsedTimeForStep(currentStepIndex - 1));
    
  }, [currentStepIndex])

  // gets the total elapsed time needed for the next step
  const calculateElapsedTimeForStep = (stepIndex: number): number => {
    const timeElapsedForNextStep = session.steps.reduce(
      (totalTime, step, index) => {
        if (index <= stepIndex) {
          return totalTime + step.timeInSeconds;
        }
        return totalTime;
      },
      0
    );
    console.log("Calculated time for next step:", timeElapsedForNextStep);
    return timeElapsedForNextStep;
  };

  const handleSkipForwards = () => {
    console.log("skip forwards");
    setCurrentStepIndex(prevStepIndex => prevStepIndex + 1);
    setSessionRunning(false);
  }

  const handleSkipBackwards = () => {
    console.log("skip backwards");
    if (currentStepIndex == 0) {
      setSessionProgress(0)
    }
    else {
      setSessionProgress((prevSessionProgress) => {
        // start start val of prev step start
        return calculateElapsedTimeForStep(currentStepIndex - 1);
      });
    }
    setSessionRunning(false);
  }

  return (
    <div className="flex flex-col h-full justify-between py-6">
      <div className="flex w-full justify-between items-center">
        <Button icon={CloseRoundedIcon} size={Size.SMALL}/>
        <StepName stepType={session.steps[currentStepIndex].stepType}></StepName>
        <div className="w-[66px]"></div>
      </div>
      <div className="w-full flex justify-center">
        {typeof preview === "string" && (
          <div>
            <div className="mb-4">
              <Button icon={ContentCopyRoundedIcon} size={Size.SMALL}></Button>
            </div>
            <Reference imgUrl={preview} />
          </div>
        )}
      </div>
      <SessionTimer
        session={session}
        getTotalSessionTime={getTotalSessionTime}
        sessionProgress={sessionProgress}
        setSessionRunning={setSessionRunning}
        sessionRunning={sessionRunning}
        sessionSteps={session.steps}
        setCurrentStepIndex={setCurrentStepIndex}
        currentStepIndex={currentStepIndex}
        handleSkipForwards={handleSkipForwards}
        handleSkipBackwards={handleSkipBackwards}
      />
    </div>
  );
};

export default SessionInProgress;
