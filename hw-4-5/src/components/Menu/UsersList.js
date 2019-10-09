import React from "react";
import User from "./User/";
import "./index.css";

export default function Menu({ users }) {
  return (
    <div className="dropdown">
      Users
      {users && (
        <div className="dropdown-content">
          {users.map(user => (
            <User key={user.id} id={user.id} username={user.username} />
          ))}
        </div>
      )}
    </div>
  );
}
