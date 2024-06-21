"use client";
import { AnimatePresence, motion } from "framer-motion";
import MainHeading from "./components/MainHeading";
import { useState } from "react";
import SessionSetup from "./components/session/setup/SessionSetup";
import SessionInProgress from "./components/session/in-progress/SessionInProgress";

export default function Home() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <main
      className="bg-slate-900 bg-cover bg-center font-sans flex items-center justify-center overflow-hidden"
      // style={{ backgroundImage: preview ? `url(${preview})` : "none"
    >
      <motion.div className="min-w-full flex flex-col h-svh p-10" layout>
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
            <SessionInProgress preview={preview} />
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
