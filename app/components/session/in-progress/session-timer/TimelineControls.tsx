import React from "react";
import PauseIcon from "@mui/icons-material/Pause";
import Button from "@/app/components/Button";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const TimelineControls = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Button icon={CloseRoundedIcon} />
      <div className="flex gap-3">
        <Button icon={SkipPreviousRoundedIcon} />
        <Button icon={PauseRoundedIcon} />
        <Button icon={SkipNextRoundedIcon} />
      </div>
      <div className="w-full max-w-[66px]"></div>
    </div>
  );
};

export default TimelineControls;
