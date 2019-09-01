import React from "react";
import "./index.css";

export default function Menu({ users, onClickHandler }) {
  return (
    <div className="dropdown">
      Users
      {users && (
        <div className="dropdown-content">
          {users.map((elem, idex) => (
            <div key={idex} id={elem.id} onClick={onClickHandler}>
              {elem.username}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
