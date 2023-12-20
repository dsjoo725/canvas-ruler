import React, { useState } from "react";
import VerticalRulerTick from "../VerticalRulerTick";

import style from "./style.module.css";

interface Props {
  height: number;
  offsetY: number;
  scale: number;
}
function VerticalRuler({ height, offsetY, scale }: Props) {
  const [interval, setInterval] = useState(100);

  if ((scale * interval) / 100 < 50) {
    setInterval(interval * 2);
  }
  if ((scale * interval) / 100 > 100) {
    setInterval(interval / 2);
  }
  return (
    <div
      id="vertical_ruler"
      className={style.vertical_ruler_layout}
      style={{ height: `${height}px`, top: `${offsetY}px` }}
    >
      {Array.from({ length: height / 100 + 1 }).map((_, index) => (
        <VerticalRulerTick
          key={index}
          label={index * interval}
          scale={scale}
          interval={interval}
        />
      ))}
    </div>
  );
}

export default VerticalRuler;
