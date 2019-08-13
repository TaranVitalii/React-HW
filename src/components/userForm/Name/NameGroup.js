import React from "react";
import NameLabel from "./NameLabel";
import NameInput from "./NameInput";

export default function NameGroup() {
  return (
    <div className="form-group">
      <NameLabel />
      <NameInput />
    </div>
  );
}
