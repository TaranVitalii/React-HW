import { getDataFromForm } from "../../services/formUtils";
import React from "react";
import NameGroup from "./NameGroup";
import BirthdayGroup from "./BirthdayGroup";
import SubmitButton from "./SubmitButton";

function UserForm(props) {
  return (
    <form
      className="user-form"
      onSubmit={e => {
        e.preventDefault();
        props.formData(getDataFromForm(e.target));
      }}
    >
      <NameGroup />
      <BirthdayGroup />
      <SubmitButton />
    </form>
  );
}

export default UserForm;
