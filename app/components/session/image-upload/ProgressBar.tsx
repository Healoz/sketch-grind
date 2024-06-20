"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface ProgressBarProps {
  percentageDone: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentageDone }) => {

  return (
    <div className="border-pink-200 border w-full h-2">
      <motion.div className="bg-pink-200 h-full" style={{width: `${percentageDone}%`}}></motion.div>
    </div>
  );
};

export default ProgressBar;
