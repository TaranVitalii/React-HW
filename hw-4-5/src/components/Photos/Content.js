import React from "react";
import Photo from "./Photo";
import "./index.css";

export default ({ photos, onClickHandler }) => {
  return (
    <div className="photos">
      photos
      {photos && (
        <div className="photosList">
          {photos.map(photo => (
            <Photo
              className="photo"
              id={photo.id}
              key={photo.id}
              albumid={photo.albumId}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
              like={photo.like}
            />
          ))}
        </div>
      )}
    </div>
  );
};
