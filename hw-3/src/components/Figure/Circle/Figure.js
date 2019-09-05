import React from "react";
import randomColor from "../../../hocs/withCircle/randomColorAndDestroy";
import "./index.css";

function Circle({ style, handler }) {
  return <div className="circle" onClick={handler} style={style} />;
}

export default randomColor(Circle);
