import React from "react";
import OddElementDragged from "../../../hocs/withSquare/oddElementDragged";
import BigSize from "../../../hocs/withSquare/size";
import BorderStyle from "../../../hocs/withSquare/border";
import EvenElement from "../../../hocs/withSquare/even";
import DragStart from "../../../hocs/withSquare/dragStart";

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

export default DragStart(
  OddElementDragged(EvenElement(BorderStyle(BigSize(Square))))
);
