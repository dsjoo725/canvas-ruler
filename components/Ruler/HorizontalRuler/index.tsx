import React, { useEffect, useState } from "react";
import HorizontalRulerTick from "../HorizontalRulerTick";

import style from "./style.module.css";

interface Props {
  width: number;
  offsetX: number;
  scale: number;
}
function HorizontalRuler({ width, offsetX, scale }: Props) {
  return (
    <div
      id="horizontal_ruler"
      className={style.horizontal_ruler_layout}
      style={{ width: `${width}px`, left: `${offsetX}px` }}
    >
      {Array.from({ length: width / 100 + 1 }).map((_, index) => (
        <HorizontalRulerTick
          key={index}
          label={((index * 100) / scale) * 100}
        />
      ))}
    </div>
  );
}

export default HorizontalRuler;
