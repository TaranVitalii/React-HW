import React from "react";

export default props => {
  function clickHandler(e) {
    props.onClick(props.data);
  }
  return (
    <button className="Button" onClick={clickHandler}>
      Submit
    </button>
  );
};
