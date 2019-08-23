import React from "react";
import "./button.css";
export default function Button({ onClickHandler, figure }) {
  return (
    <button className={`button${figure}`} onClick={onClickHandler}>
      {figure}
    </button>
  );
}
