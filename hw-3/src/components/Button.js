import React from "react";

export default function Button({ onClickHandler, figure, styleButton }) {
  return (
    <button
      className={`button${figure}`}
      onClick={onClickHandler}
      style={styleButton}
    >
      {figure}
    </button>
  );
}
