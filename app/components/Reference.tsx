import React, { FC } from "react";

interface ReferenceProps {
    imgUrl: string
}

const Reference: FC<ReferenceProps> = ({imgUrl}) => {
  return (
    <img
      className="border-pink-200 bg-slate-950 border rounded mb-6 object-scale-down max-h-96"
      src={imgUrl}
    ></img>
  );
};

export default Reference;
