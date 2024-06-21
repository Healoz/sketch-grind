import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import arrowDownSvg from "../../../../../public/triangle.svg";
import Image from "next/image";

const CurrentTimeIndicator = () => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col items-center">
        <div className="flex">
          <p className="text-pink-200 text-sm border border-pink-200 rounded relative p-2">
            30:27
          </p>
        </div>
        <Image src={arrowDownSvg} alt="arrow down img" width={16} />
      </div>
    </div>
  );
};

export default CurrentTimeIndicator;
