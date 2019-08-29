import React from "react";
import Button from "../../Button";
import Circle from "./Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureCircle({ onClickHandler, circles, destroy }) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="circle"
            className={value.themeButton}
          />
          {circles.map(elem => (
            <Circle destroy={destroy} key={elem} elem={elem} />
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  );
}
