import React from "react";
import Likes from "../Likes";

import "./index.css";
export default ({ photos, onClickHandler }) => {
  return (
    <div className="photos">
      photos
      {photos && (
        <div className="photosList">
          {photos.map(photo => (
            <div
              className="photo"
              id={photo.id}
              key={photo.id}
              albumid={photo.albumId}
            >
              <h4>{photo.title}</h4>

              <img className="photoImg" src={photo.thumbnailUrl} />
              <Likes onClick={onClickHandler} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
