import React, { FC } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { Size } from "../types/Size";
import { motion } from "framer-motion";

interface IconButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  children?: React.ReactNode;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggleIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  toggle?: boolean;
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
  toggle,
  toggleIcon,
}) => {
  const { padding, iconSize } = size
    ? styles[size]
    : styles[Size.MEDIUM] || styles.default;

  const IconComponent = toggle && toggleIcon ? toggleIcon : Icon;

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={onClick}
        className={`text-pink-200 border-pink-200 border rounded flex gap-3 ${padding}`}
      >
        <IconComponent className={iconSize} />
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
