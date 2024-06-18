"use client";
import { AnimatePresence, motion } from "framer-motion";
import UploadImage from "./components/image-upload/UploadImage";
import MainHeading from "./components/MainHeading";
import ImagePreview from "./components/image-upload/ImagePreview";
import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  return (
    <main
      className="bg-slate-900 bg-cover bg-center font-sans flex items-center justify-center overflow-hidden"
      // style={{ backgroundImage: preview ? `url(${preview})` : "none"
    >
      <motion.div className="min-w-full flex flex-col h-svh p-10" layout>
        <MainHeading />
        <AnimatePresence>
          {preview ? (
            <motion.div
              key={1}
              initial={{ opacity: 0, x: 600, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 600, y: 50 }}
              transition={{
                delay: 0.73,
                duration: 0.7,
                type: "spring",
              }}
            >
              <ImagePreview preview={preview} setPreview={setPreview} />
            </motion.div>
          ) : (
            <motion.div
              key={2}
              initial={{ opacity: 0, x: -600, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -600, y: -50 }}
              transition={{
                delay: preview ? 0.73 : 0, // Apply delay only when transitioning from on to off
                duration: 0.7,
                type: "spring",
              }}
            >
              <UploadImage setPreview={setPreview} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
