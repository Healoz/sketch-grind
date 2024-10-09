import React, { FC, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";

interface ReferenceProps {
  imgUrl: string;
}

const Reference: FC<ReferenceProps> = ({ imgUrl }) => {
  const fac = new FastAverageColor();
  const container = document.querySelector(".image-container");
  const imgRef = useRef(null);

  const [averageColour, setAverageColour] = useState('#000');

  // if (container) {
  //   fac
  //     .getColorAsync(container.querySelector("img"))
  //     .then((color) => {
  //       setAverageColour(color.hex);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  return (
    <div className="image-container flex items-center justify-center">
      <img
        className="border-pink-200 bg-slate-950 border rounded mb-6 object-scale-down max-h-96"
        src={imgUrl}
        ref={imgRef}
      ></img>
      {/* <div className="w-6 h-6 bg-red-500" style={{backgroundColor: averageColour}}></div> */}
    </div>
  );
};

export default Reference;
