import React from "react";
import Button from "../../Button";
import Triangle from "./Figure";
import style from "../../../styles/Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureTriangle({
  onClickHandler,
  triangles,
  destroy,
  styleButton
}) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="triangle"
            styleButton={value.styleButton}
          />
          {triangles.map(elem => (
            <Triangle
              style={style.triangle}
              destroy={destroy}
              key={elem}
              elem={elem}
            />
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  );
}
