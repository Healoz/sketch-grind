"use client";
import { AnimatePresence, motion } from "framer-motion";
import UploadImage from "./components/image-upload/UploadImage";
import MainHeading from "./components/MainHeading";
import ImagePreview from "./components/image-upload/ImagePreview";
import { useState } from "react";
import SessionSetup from "./components/SessionSetup";

export default function Home() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <main
      className="bg-slate-900 bg-cover bg-center font-sans flex items-center justify-center overflow-hidden"
      // style={{ backgroundImage: preview ? `url(${preview})` : "none"
    >
      <motion.div className="min-w-full flex flex-col h-svh p-10" layout>
        {!sessionStarted ? (
          <SessionSetup preview={preview} setPreview={setPreview}/>
        ) : (
          <h1>Hello</h1>
        )}
      </motion.div>
    </main>
  );
}
