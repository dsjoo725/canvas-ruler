import React from "react";
import style from "./style.module.css";

interface Props {
  label: number;
}
function VerticalRulerTick({ label }: Props) {
  return (
    <div className={style.vertical_ruler_tick_layout}>
      <div className={style.vertical_ruler_mark_layout}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={style.vertical_ruler_mark} />
        ))}
      </div>
      <div className={style.vertical_ruler_label}>{Math.round(label)}</div>
    </div>
  );
}

export default VerticalRulerTick;
