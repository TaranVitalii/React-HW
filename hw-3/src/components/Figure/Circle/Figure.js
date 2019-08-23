import React from "react";
import randomColor from "../../../hocs/withCircle/randomColorAndDestroy";

function Square({ style, handler }) {
  return <div className="circle" onClick={handler} style={style} />;
}

export default randomColor(Square);
