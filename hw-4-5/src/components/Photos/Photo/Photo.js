import React from "react";

const Photo = ({ title, thumbnailUrl, like, onClickHandler }) => {
  return (
    <div className="photo">
      <h4>{title}</h4>

      <img className="photoImg" src={thumbnailUrl} />
      <div className="likes">
        {like}
        <i className="far fa-heart" onClick={onClickHandler}></i>
      </div>
    </div>
  );
};

export default Photo;
