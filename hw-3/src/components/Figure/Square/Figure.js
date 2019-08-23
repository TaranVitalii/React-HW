import React from "react";
import "./index.css";
import odd from "../../../hocs/withSquare/odd";
import size from "../../../hocs/withSquare/size";
import border from "../../../hocs/withSquare/border";
import other from "../../../hocs/withSquare/other";

function Square({ dragged, style, count, dragStart, dragEnd }) {
  return (
    <div
      count={count}
      className="square"
      draggable={dragged}
      style={style}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    />
  );
}

export default odd(other(border(size(Square))));
