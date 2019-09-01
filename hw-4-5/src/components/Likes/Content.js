import React from "react";

export default ({ like, onClickHandler }) => {
  console.log(like);
  return (
    <div>
      <i className="far fa-heart" onClick={onClickHandler}>
        <div className="likes">{like}</div>
      </i>
    </div>
  );
};
