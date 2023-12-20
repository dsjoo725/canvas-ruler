import React from "react";
import VerticalRulerTick from "../VerticalRulerTick";

import style from "./style.module.css";

interface Props {
  height: number;
  offsetY: number;
  scale: number;
}
function VerticalRuler({ height, offsetY, scale }: Props) {
  return (
    <div
      id="vertical_ruler"
      className={style.vertical_ruler_layout}
      style={{ height: `${height}px`, top: `${offsetY}px` }}
    >
      {Array.from({ length: height / 100 + 1 }).map((_, index) => (
        <VerticalRulerTick key={index} label={((index * 100) / scale) * 100} />
      ))}
    </div>
  );
}

export default VerticalRuler;
