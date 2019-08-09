import "./index.css";
import UserForm from "./components/userForm";
import Greetings from "./components/greetings";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <UserForm formData={onSubmit} />,
  document.getElementById("app")
);

function onSubmit(value) {
  ReactDOM.render(
    <Greetings data={value} onBack={backToForm} />,
    document.getElementById("app")
  );
}

function backToForm() {
  ReactDOM.render(
    <UserForm formData={onSubmit} />,
    document.getElementById("app")
  );
}
