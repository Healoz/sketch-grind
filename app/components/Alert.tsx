import React, { FC } from "react";
import ErrorIcon from "@mui/icons-material/Error";

interface AlertProps {
  alertTitle: string;
  alertDesc: string;
}

const Alert: FC<AlertProps> = ({ alertTitle, alertDesc }) => {
  return (
    <div className="bg-slate-800 max-w-screen-sm p-4 border rounded border-red-400 flex gap-3">
      <ErrorIcon className="text-red-400 text-3xl" />
      <div>
        <h2 className="text-red-400 font-bold mb-1">{alertTitle}</h2>
        <p className="text-pink-200 text-sm">{alertDesc}</p>
      </div>
    </div>
  );
};

export default Alert;
