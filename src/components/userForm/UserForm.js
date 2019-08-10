import { getDataFromForm } from "../../services/formUtils";
import React from "react";
import NameGroup from "./Name";
import BirthdayGroup from "./Birthday";
import SubmitButton from "./SubmitButton/SubmitButton";

class UserForm extends React.Component {
  onSubmitEvent = e => {
    e.preventDefault();
    this.props.formData(getDataFromForm(e.target));
  };

  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmitEvent}>
        <NameGroup />
        <BirthdayGroup />
        <SubmitButton />
      </form>
    );
  }
}

export default UserForm;
