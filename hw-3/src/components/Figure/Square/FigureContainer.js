import React from "react";
import Button from "../../Button";
import Square from "./Figure";
import style from "../../../styles/Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureSquare({ onClickHandler, squares, dragStart }) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="square"
            styleButton={value.styleButton}
          />
          {squares.map(elem => (
            <Square
              count={elem}
              key={elem}
              dragStart={dragStart}
              style={style.square}
            />
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  );
}
