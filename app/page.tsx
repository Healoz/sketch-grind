import { motion } from "framer-motion";
import UploadImage from "./components/image-upload/UploadImage";
import MainHeading from "./components/MainHeading";

export default function Home() {
  return (
    <main className="bg-slate-900 h-svh p-10 font-sans flex flex-col">
      <MainHeading />
      <UploadImage />
    </main>
  );
}
