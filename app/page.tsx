"use client";
import { motion } from "framer-motion";
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
      <div className="min-w-full flex flex-col h-svh p-10">
        <MainHeading />
        {preview ? (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ImagePreview preview={preview} />
          </motion.div>
        ) : (
          <UploadImage setPreview={setPreview} />
        )}
      </div>
    </main>
  );
}
