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
  getTotalSessionTime,
}) => {
  const [sessionRunning, setSessionRunning] = useState(false);
  const [sessionProgress, setSessionProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeForNextStep, setTimeForNextStep] = useState(0);

  // run timer if session is running
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (sessionRunning) {
      // increment the overall timer by 1 second
      interval = setInterval(() => {
        setSessionProgress((prevSessionProgress) => prevSessionProgress + 1);
      }, 1000);

    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sessionRunning]);

  // check every second if the current time has passed the time needed for next step
  // if it has, pause the timer and increment the currentStepIndex
  useEffect(() => {
    if (!sessionRunning) {
      // if session isn't running, dont perform checks
      return;
    }
    if (sessionProgress >= timeForNextStep) {
      setSessionRunning(false);
      setCurrentStepIndex((prevCurrentStepIndex) => {
        console.log("Incrementing step index:", prevCurrentStepIndex + 1);
        return prevCurrentStepIndex + 1;
      });
    }
  }, [sessionProgress])

  // everytime the currentStepIndex changes, find the new goal for the timeForNextStep
  useEffect(() => {
    console.log("Current Step Index changed:", currentStepIndex);
    setTimeForNextStep(calculateElapsedTimeForStep());
  }, [currentStepIndex])

  // gets the total elapsed time needed for the next step
  const calculateElapsedTimeForStep = (): number => {
    const timeElapsedForNextStep = session.steps.reduce(
      (totalTime, step, index) => {
        if (index <= currentStepIndex) {
          return totalTime + step.timeInSeconds;
        }
        return totalTime;
      },
      0
    );
    console.log("Calculated time for next step:", timeElapsedForNextStep);
    return timeElapsedForNextStep;
  };

  return (
    <div className="flex flex-col h-full justify-between py-6">
      <div className="flex w-full justify-between items-center">
        <Button icon={CloseRoundedIcon} />
        <StepName stepType={StepType.STUDY}>Step name</StepName>
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
      />
    </div>
  );
};

export default SessionInProgress;
