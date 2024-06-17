import { motion } from "framer-motion";
import UploadImage from "./components/image-upload/UploadImage";
import MainHeading from "./components/MainHeading";
import ImagePreview from "./components/image-upload/ImagePreview";

export default function Home() {
  return (
    <main className="bg-slate-900 font-sans flex items-center justify-center overflow-hidden">
      <div className="min-w-full flex flex-col h-svh p-10">
        <MainHeading />
        <UploadImage />
      </div>
    </main>
  );
}
