import React from "react";
import PauseIcon from "@mui/icons-material/Pause";
import Button from "@/app/components/Button";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Size } from "@/app/types/Size";

const TimelineControls = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* <Button icon={CloseRoundedIcon} /> */}
      <div className="flex gap-5 items-center justify-center w-full">
        <Button icon={SkipPreviousRoundedIcon} />
        <Button icon={PauseRoundedIcon} size={Size.LARGE} />
        <Button icon={SkipNextRoundedIcon} /> 
      </div>
      {/* <div className="w-full max-w-[66px]"></div> */}
    </div>
  );
};

export default TimelineControls;
