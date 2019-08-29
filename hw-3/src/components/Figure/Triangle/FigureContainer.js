import React from "react";
import Button from "../../Button";
import Triangle from "./Figure";
import StoreContext from "../../../contexts/Theme";

export default function FigureTriangle({ onClickHandler, triangles, destroy }) {
  return (
    <StoreContext.Consumer>
      {value => (
        <div className="headers">
          <Button
            onClickHandler={onClickHandler}
            figure="triangle"
            className={value.themeButton}
          />
          {triangles.map(elem => (
            <Triangle destroy={destroy} key={elem} elem={elem} />
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  );
}
