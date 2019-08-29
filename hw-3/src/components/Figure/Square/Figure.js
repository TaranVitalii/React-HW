import React from "react";
import OddElementDragged from "../../../hocs/withSquare/oddElementDragged";
import BigSize from "../../../hocs/withSquare/size";
import BorderStyle from "../../../hocs/withSquare/border";
import EvenElement from "../../../hocs/withSquare/even";
import DragStart from "../../../hocs/withSquare/dragStart";
import "./index.css";

function Square({ dragged, count, dragStart, dragEnd, className }) {
  return (
    <div
      count={count}
      className={className}
      draggable={dragged}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    />
  );
}

export default DragStart(
  OddElementDragged(EvenElement(BorderStyle(BigSize(Square))))
);
