import React from "react";
import Button from "../../Button";
import Triangle from "./Figure";

export default function FigureContainerTriangle({
  onClickHandler,
  triangles,
  style,
  destroy,
  styleButton
}) {
  return (
    <div className="triangleHeaders">
      <Button
        onClickHandler={onClickHandler}
        figure="triangle"
        styleButton={styleButton}
      />
      {triangles.map(elem => (
        <Triangle style={style} destroy={destroy} key={elem} elem={elem} />
      ))}
    </div>
  );
}
