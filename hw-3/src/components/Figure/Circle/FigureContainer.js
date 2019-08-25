import React from "react";
import Button from "../../Button";
import Circle from "./Figure";

export default function FigureContainerCircle({
  onClickHandler,
  circles,
  style,
  destroy,
  styleButton
}) {
  return (
    <div className="circleHeaders">
      <Button
        onClickHandler={onClickHandler}
        figure="circle"
        styleButton={styleButton}
      />
      {circles.map((elem, index) => (
        <Circle style={style} destroy={destroy} key={index} elem={elem} />
      ))}
    </div>
  );
}
