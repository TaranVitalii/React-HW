import React from "react";

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
              <div className="likes">
                {photo.like}
                <i className="far fa-heart" onClick={onClickHandler}></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
