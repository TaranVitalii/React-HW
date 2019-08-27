import React from "react";
import Button from "../../Button";
import Circle from "./Figure";
import style from "../../../styles/Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureCircle({ onClickHandler, circles, destroy }) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="circle"
            styleButton={value.styleButton}
          />
          {circles.map(elem => (
            <Circle
              style={style.circle}
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
