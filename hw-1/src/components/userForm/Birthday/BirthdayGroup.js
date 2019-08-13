import React from "react";
import BirthdayInput from "./BirthdayInput";
import BirthdayLabel from "./BirthdayLabel";

export default function AgeGroup() {
  return (
    <div className="form-group">
      <BirthdayLabel />
      <BirthdayInput />
    </div>
  );
}
