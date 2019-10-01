import React from "react";
import Album from "./Album";
import "./index.css";

export default ({ albums }) => {
  return (
    <div className="albums">
      albums
      {albums && (
        <div className="albumsList">
          {albums.map(album => (
            <Album id={album.id} key={album.id} title={album.title} />
          ))}
        </div>
      )}
    </div>
  );
};
