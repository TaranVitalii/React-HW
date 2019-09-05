import React from "react";
import DragAndDrop from "../../../hocs/withTriangle/Drag'n'drop";
import ImgLoad from "../../../hocs/withTriangle/imgLoad";
import "./index.css";

function Triangle({ className, handler, onDragOver, onDrop }) {
  return (
    <div
      className={className}
      onClick={handler}
      onDragOver={onDragOver}
      onDrop={onDrop}
    ></div>
  );
}

export default DragAndDrop(ImgLoad(Triangle));
