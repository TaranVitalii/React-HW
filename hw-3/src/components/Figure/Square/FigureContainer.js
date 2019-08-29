import React from "react";
import Button from "../../Button";
import Square from "./Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureSquare({
  onClickHandler,
  squares,
  dragStart,
  className
}) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="square"
            className={value.themeButton}
          />
          {squares.map(elem => (
            <Square
              count={elem}
              key={elem}
              dragStart={dragStart}
              className={className}
            />
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  );
}
