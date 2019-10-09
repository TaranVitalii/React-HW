import React from "react";

const Album = ({ id, onClickHandler, title }) => {
  return (
    <div className="album" onClick={onClickHandler}>
      {title}
    </div>
  );
};
export default Album;
