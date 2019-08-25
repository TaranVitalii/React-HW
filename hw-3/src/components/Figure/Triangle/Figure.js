import React from "react";
import DragAndDrop from "../../../hocs/withTriangle/Drag'n'drop";
import ImgLoad from "../../../hocs/withTriangle/imgLoad";

function Triangle({ style, handler, onDragOver, onDrop }) {
  return (
    <div
      className="triangle"
      onClick={handler}
      style={style}
      onDragOver={onDragOver}
      onDrop={onDrop}
    ></div>
  );
}

export default DragAndDrop(ImgLoad(Triangle));
