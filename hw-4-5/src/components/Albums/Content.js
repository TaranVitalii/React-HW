import React from "react";
import "./index.css";

export default ({ albums, onClickHandler }) => {
  return (
    <div className="albums">
      ALBUMS
      {albums && (
        <div className="albumsList">
          {albums.map(elem => (
            <div
              className="album"
              id={elem.id}
              key={elem.id}
              userid={elem.userId}
              onClick={onClickHandler}
            >
              {elem.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
