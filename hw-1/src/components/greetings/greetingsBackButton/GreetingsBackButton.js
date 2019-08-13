import React from "react";
import "./greetingsBackButton.css";

export default props => {
  return (
    <span className="back-button" onClick={props.onPress}>
      ←
    </span>
  );
};
