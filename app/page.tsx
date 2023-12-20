"use client";
import React, { ChangeEvent, useRef, useState } from "react";

import style from "./style.module.css";
import Ruler from "@/components/Ruler";

function RuluerPage() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [scale, setScale] = useState(100);
  const [offsetX, setOffsetX] = useState(32);
  const [offsetY, setOffsetY] = useState(32);

  const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 1) return;
    setWidth(Number(e.target.value));
  };

  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 1) return;
    setHeight(Number(e.target.value));
  };

  const handleChangeScale = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 10) return;
    setScale(Number(e.target.value));
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const scrollLeft = target.scrollLeft;
    const scrollTop = target.scrollTop;
    setOffsetX(32 - scrollLeft);
    setOffsetY(32 - scrollTop);
  };

  return (
    <div className={style.ruler_page_layout}>
      <h1>눈금자</h1>
      <label className={style.input_label}>
        width
        <input
          className={style.input}
          type="number"
          value={width}
          onChange={handleChangeWidth}
        />
      </label>
      <label className={style.input_label}>
        height
        <input
          className={style.input}
          type="number"
          value={height}
          onChange={handleChangeHeight}
        />
      </label>
      <label className={style.input_label}>
        scale
        <input
          className={style.input}
          type="number"
          value={scale}
          onChange={handleChangeScale}
        />
      </label>
      <div className={style.canvas_layout}>
        <Ruler
          width={Math.max(width, 1080)}
          height={Math.max(height, 720)}
          offsetX={offsetX}
          offsetY={offsetY}
          scale={scale}
        />
        <div className={style.canvas} onScroll={handleScroll}>
          <div
            className={style.paper}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `scale(${scale / 100})`,
            }}
          >
            paper
          </div>
        </div>
      </div>
    </div>
  );
}

export default RuluerPage;
