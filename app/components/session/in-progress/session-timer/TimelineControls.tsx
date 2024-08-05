import React, { FC } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import Button from "@/app/components/Button";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Size } from "@/app/types/Size";
import { AnimatePresence, motion } from "framer-motion";

interface TimelineControlsProps {
  sessionRunning: boolean;
  setSessionRunning: (isRunning: boolean) => void;
}

const TimelineControls: FC<TimelineControlsProps> = ({
  setSessionRunning,
  sessionRunning,
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* <Button icon={CloseRoundedIcon} /> */}
      <div className="flex gap-5 items-center justify-center w-full">
        <Button icon={SkipPreviousRoundedIcon} />
        <Button
          key={1}
          icon={PauseRoundedIcon}
          toggle={sessionRunning}
          toggleIcon={PlayArrowRoundedIcon}
          size={Size.LARGE}
          onClick={() => setSessionRunning(!sessionRunning)}
        />
        <Button icon={SkipNextRoundedIcon} />
      </div>
      {/* <div className="w-full max-w-[66px]"></div> */}
    </div>
  );
};

export default TimelineControls;
