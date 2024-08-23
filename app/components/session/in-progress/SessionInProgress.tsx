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
import { SessionStatus } from "@/app/types/SessionStatus";

interface SessionInProgressProps {
  preview: string | ArrayBuffer | null;
  session: Session;
  getTotalSessionTime: () => number;
  setSessionStatus: (sessionStatus: SessionStatus) => void;
}

const SessionInProgress: FC<SessionInProgressProps> = ({
  preview,
  session,
  getTotalSessionTime,
  setSessionStatus
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
    if (sessionProgress < timeForNextStep || !sessionRunning) {
      return;
    }

    // fulfilled the time for the next step or finish of session
    setSessionRunning(false);

    // check if session is complete
    if (currentStepIndex < session.steps.length - 1) {
      // Add a small delay before incrementing the step index to avoid premature changes
      setTimeout(() => {
        console.log("current step index: " + currentStepIndex);
        console.log(`max num of steps: ${session.steps.length - 1}`);
        // only increment the step index if
        setCurrentStepIndex((prevCurrentStepIndex) => {
          console.log("Incrementing step index:", prevCurrentStepIndex + 1);
          return prevCurrentStepIndex + 1;
        });
      }, 500);
    } else {
      // immediately should remove ability to play and skip
      setTimeout(() => {
        console.log("session finished");
        setSessionStatus(SessionStatus.FINISHED);
      }, 1000);
    }

    // need to make sure when skipping backwards the step index is an appropriate value
  }, [sessionProgress]);

  // everytime the currentStepIndex changes, find the new goal for the timeForNextStep.
  useEffect(() => {
    console.log("Current Step Index changed:", currentStepIndex);
    setTimeForNextStep(calculateElapsedTimeForStep(currentStepIndex));

    // if user has skipped manually, need to change current time (use calculatedtimeforStep)
    setSessionProgress(calculateElapsedTimeForStep(currentStepIndex - 1));
  }, [currentStepIndex]);

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
    if (currentStepIndex < session.steps.length) {
      setCurrentStepIndex((prevStepIndex) => prevStepIndex + 1);
    }

    setSessionRunning(false);
  };

  const handleSkipBackwards = () => {
    console.log("skip backwards");

    if (isAtStartOfStep()) {
      setCurrentStepIndex((prevStepIndex) => prevStepIndex - 1); //automatically changes progress
    } else {
      setSessionProgress(() =>
        currentStepIndex === 0
          ? 0 // Start is always 0 for the first step
          : calculateElapsedTimeForStep(currentStepIndex - 1)
      );
    }

    setSessionRunning(false);
  };

  const isAtStartOfStep = (): boolean => {
    const startOfCurrentStep =
      currentStepIndex === 0
        ? 0 // Start is always 0 for the first step
        : calculateElapsedTimeForStep(currentStepIndex - 1);

    const endOfCurrentStep = timeForNextStep;

    console.log("start of step: " + startOfCurrentStep);
    console.log("end of step: " + endOfCurrentStep);
    if (
      sessionProgress > startOfCurrentStep &&
      sessionProgress < endOfCurrentStep
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col h-full justify-between py-6">
      <div className="flex w-full justify-between items-center">
        <Button icon={CloseRoundedIcon} size={Size.SMALL} />
        <StepName
          stepType={session.steps[currentStepIndex].stepType}
        ></StepName>
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
