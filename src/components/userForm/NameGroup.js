import React from "react";

function NameInput() {
  return (
    <input type="text" className="form-control" id="name" placeholder="Name" />
  );
}

function NameLabel() {
  return <label htmlFor="name">What is your name?</label>;
}

export default function NameGroup() {
  return (
    <div className="form-group">
      <NameLabel />
      <NameInput />
    </div>
  );
}
