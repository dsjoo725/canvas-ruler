import React from "react";
import style from "./style.module.css";

interface Props {
  label: number;
  scale: number;
  interval: number;
}
function VerticalRulerTick({ label, scale, interval }: Props) {
  return (
    <div
      className={style.vertical_ruler_tick_layout}
      style={{
        height: `${(scale * interval) / 100}px`,
      }}
    >
      <div className={style.vertical_ruler_mark_layout}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={style.vertical_ruler_mark}
            style={{
              flex: `0 0 ${(scale * interval) / 10 / 100}px`,
            }}
          />
        ))}
      </div>
      <div className={style.vertical_ruler_label}>{Math.round(label)}</div>
    </div>
  );
}

export default VerticalRulerTick;
