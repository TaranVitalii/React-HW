import React from "react";
import "./button.css";

export default function Button({ onClickHandler, figure, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {figure}
    </button>
  );
}
