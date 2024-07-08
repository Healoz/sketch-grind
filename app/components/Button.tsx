import React, { FC } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

interface IconButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IconButtonProps> = ({ icon: Icon, children, onClick = () => {} }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-pink-200 border-pink-200 border rounded p-5 flex gap-3`}
      >
        <Icon />
        {children}
      </button>
    </div>
  );
};

export default Button;
