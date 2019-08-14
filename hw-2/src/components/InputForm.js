import React from "react";
import UserIdInput from "./UserIdInput";
import ButtonSubmit from "./ButtonSubmit";

export default class InputForm extends React.Component {
  state = {};
  onChange = dataFromForm => {
    this.setState({ dataFromForm }, () => console.log("onChange", this.state));
  };

  render() {
    return (
      <form className="user-form">
        <UserIdInput onChange={this.onChange} />
        <ButtonSubmit
          onSubmit={this.props.onclick}
          data={this.state.dataFromForm}
        />
      </form>
    );
  }
}
