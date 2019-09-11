import React from "react";

const User = ({ id, onClickHandler, username }) => {
  return (
    <div id={id} onClick={onClickHandler}>
      {username}
    </div>
  );
};
export default User;
