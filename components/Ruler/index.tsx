import React from "react";
import HorizontalRuler from "./HorizontalRuler";
import VerticalRuler from "./VerticalRuler";

import style from "./style.module.css";

interface Props {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  scale: number;
}
function Ruler({ width, height, offsetX, offsetY, scale }: Props) {
  return (
    <div className={style.ruler_layout}>
      <div className={style.ruler_origin}>px</div>
      <HorizontalRuler width={width} offsetX={offsetX} scale={scale} />
      <VerticalRuler height={height} offsetY={offsetY} scale={scale} />
    </div>
  );
}

export default Ruler;
