"use client";
import { AnimatePresence, motion } from "framer-motion";
import MainHeading from "./components/MainHeading";
import { useState } from "react";
import SessionSetup from "./components/session/setup/SessionSetup";
import SessionInProgress from "./components/session/in-progress/SessionInProgress";
import { Session } from "./types/Session";
import { Step } from "./types/Step";
import { SessionStatus } from "./types/SessionStatus";
import SessionComplete from "./components/session/complete/SessionComplete";
import SessionSelect from "./components/session/setup/session-select/SessionSelect";
import sessionsData from "./data/sessions.json";

export default function Home() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>(
    SessionStatus.SETUP
  );
  const [sessions, setSessions] = useState<Session[]>(sessionsData.sessions);

  const [currentSession, setCurrentSession] = useState<Session>(sessions[0]);

  const getTotalSessionTime = (session: Session): number => {
    let totalTime = 0;
    session.steps.forEach((step) => {
      totalTime += step.timeInSeconds;
    });

    return totalTime;
  };

  return (
    <main className="bg-slate-900 bg-cover bg-center font-sans flex items-center justify-center overflow-hidden scroll-smooth">
      <motion.div className="min-w-full flex flex-col h-svh p-8" layout>
        <AnimatePresence>
          {sessionStatus === SessionStatus.SETUP && (
            <motion.div
              key={SessionStatus.SETUP}
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
                setSessionStatus={setSessionStatus}
              />
            </motion.div>
          )}

          {sessionStatus === SessionStatus.SESSION_SELECT && (
            <SessionSelect
              preview={preview}
              sessions={sessions}
              setCurrentSession={setCurrentSession}
              getTotalSessionTime={getTotalSessionTime}
            />
          )}

          {sessionStatus === SessionStatus.IN_PROGRESS && (
            <motion.div
              key={SessionStatus.IN_PROGRESS}
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
                session={currentSession}
                getTotalSessionTime={getTotalSessionTime}
                setSessionStatus={setSessionStatus}
              />
            </motion.div>
          )}

          {sessionStatus === SessionStatus.FINISHED && (
            <motion.div key={SessionStatus.FINISHED}>
              <SessionComplete
                preview={preview}
                setSessionStatus={setSessionStatus}
                setPreview={setPreview}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
