"use client";
import { AnimatePresence, motion } from "framer-motion";
import UploadImage from "./components/session/image-upload/UploadImage";
import MainHeading from "./components/MainHeading";
import ImagePreview from "./components/session/image-upload/ImagePreview";
import { useState } from "react";
import SessionSetup from "./components/session/SessionSetup";

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
              exit={{ opacity: 0, y: 400, x: -50, transition: { duration: 0.6, type: "spring" } }}
            >
              <SessionSetup
                preview={preview}
                setPreview={setPreview}
                setSessionStarted={setSessionStarted}
              />
            </motion.div>
          ) : (
            <h1 key={2}>Hello</h1>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
