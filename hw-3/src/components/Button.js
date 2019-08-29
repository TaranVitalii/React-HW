import React from "react";

export default function Button({ onClickHandler, figure, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {figure}
    </button>
  );
}
