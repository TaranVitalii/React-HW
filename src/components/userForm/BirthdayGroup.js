import React from "react";

function BirthdayInput() {
  return (
    <input
      type="date"
      className="form-control"
      id="birthday"
      placeholder="Birthday"
    />
  );
}

function BirthdayLabel() {
  return <label htmlFor="birthday">Enter your birthday</label>;
}

export default function AgeGroup() {
  return (
    <div className="form-group">
      <BirthdayLabel />
      <BirthdayInput />
    </div>
  );
}
