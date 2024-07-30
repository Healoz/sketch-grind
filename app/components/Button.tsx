import React, { FC } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { Size } from "../types/Size";

interface IconButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  children?: React.ReactNode;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const styles = {
  [Size.SMALL]: {
    padding: "p-3",
    iconSize: "text-xl",
  },
  [Size.MEDIUM]: {
    padding: "p-5",
    iconSize: "text-2xl",
  },
  [Size.LARGE]: {
    padding: "p-7",
    iconSize: "text-2xl",
  },
  default: {
    padding: "p-5",
    iconSize: "text-2xl",
  },
};

const Button: FC<IconButtonProps> = ({
  icon: Icon,
  children,
  size,
  onClick = () => {},
}) => {
  const { padding, iconSize } = size
    ? styles[size]
    : styles[Size.MEDIUM] || styles.default;

  return (
    <div>
      <button
        onClick={onClick}
        className={`text-pink-200 border-pink-200 border rounded flex gap-3 ${padding}`}
      >
        <Icon className={iconSize} />
        {children}
      </button>
    </div>
  );
};

export default Button;
