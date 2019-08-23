import React from "react";
import randomColor from "../../../hocs/withCircle/randomColorAndDestroy";

function Triangle({ style, handler, onDragOver, onDrop }) {
  return (
    <div
      className="triangle"
      onClick={handler}
      style={style}
      onDragOver={onDragOver}
      onDrop={onDrop}
    />
  );
}

export default Triangle;
