import React from "react";
import UserIdInput from "./UserIdInput";
import ButtonSubmit from "./ButtonSubmit";

export default class InputForm extends React.Component {
  onSubmitEvent = e => {
    e.preventDefault();
    this.props.inputData(e.target.elements.UserId.value);
  };

  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmitEvent}>
        <UserIdInput />
        <ButtonSubmit />
      </form>
    );
  }
}
