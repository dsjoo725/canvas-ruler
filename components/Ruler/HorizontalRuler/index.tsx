import React, { useState } from "react";
import HorizontalRulerTick from "../HorizontalRulerTick";

import style from "./style.module.css";

interface Props {
  width: number;
  offsetX: number;
  scale: number;
}
function HorizontalRuler({ width, offsetX, scale }: Props) {
  const [interval, setInterval] = useState(100);

  if (scale < 100 && (scale * interval) / 100 < 50) {
    setInterval(interval * 2);
  }
  if (scale < 100 && (scale * interval) / 100 > 100) {
    setInterval(interval / 2);
  }

  return (
    <div
      id="horizontal_ruler"
      className={style.horizontal_ruler_layout}
      style={{ width: `${width}px`, left: `${offsetX}px` }}
    >
      {Array.from({ length: width / interval + 1 }).map((_, index) => (
        <HorizontalRulerTick
          key={index}
          label={index * interval}
          scale={scale}
          interval={interval}
        />
      ))}
    </div>
  );
}

export default HorizontalRuler;
