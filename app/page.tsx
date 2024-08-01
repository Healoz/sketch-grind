"use client";
import { AnimatePresence, motion } from "framer-motion";
import MainHeading from "./components/MainHeading";
import { useState } from "react";
import SessionSetup from "./components/session/setup/SessionSetup";
import SessionInProgress from "./components/session/in-progress/SessionInProgress";
import { Session } from "./types/Session";
import { Step } from "./types/Step";
import { StepType } from "./types/StepType";

export default function Home() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [session, setSession] = useState<Session>({
    id: "1",
    img: "jdkwajd",
    steps: [
      { stepType: StepType.STUDY, timeInSeconds: 10 },
      { stepType: StepType.STUDY, timeInSeconds: 30 },
      { stepType: StepType.STUDY, timeInSeconds: 10 },
      { stepType: StepType.STUDY, timeInSeconds: 10 },
    ],
  });

  const getTotalSessionTime = (): number => {
    let totalTime = 0;
    session.steps.forEach((step) => {
      totalTime += step.timeInSeconds;
    });

    return totalTime;
  };

  return (
    <main className="bg-slate-900 bg-cover bg-center font-sans flex items-center justify-center overflow-hidden">
      <motion.div className="min-w-full flex flex-col h-svh p-8" layout>
        <AnimatePresence>
          {!sessionStarted ? (
            <motion.div
              key={1}
              initial={{ opacity: 1, y: 0, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{
                opacity: 0,
                y: 400,
                x: -50,
                transition: { duration: 0.6, type: "spring" },
              }}
            >
              <SessionSetup
                preview={preview}
                setPreview={setPreview}
                setSessionStarted={setSessionStarted}
              />
            </motion.div>
          ) : (
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: 300, y: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { delay: 0.65 },
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <SessionInProgress
                preview={preview}
                session={session}
                getTotalSessionTime={getTotalSessionTime}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
