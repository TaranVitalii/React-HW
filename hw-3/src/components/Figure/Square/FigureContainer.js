import React from "react";
import Button from "../../Button";
import Square from "./Figure";

export default function FigureContainerSquare({
  onClickHandler,
  squares,
  dragStart,
  style,
  styleButton
}) {
  return (
    <div className="squareHeaders">
      <Button
        onClickHandler={onClickHandler}
        figure="square"
        styleButton={styleButton}
      />
      {squares.map(elem => (
        <Square count={elem} key={elem} dragStart={dragStart} style={style} />
      ))}
    </div>
  );
}
