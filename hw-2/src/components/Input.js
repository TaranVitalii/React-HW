import React from "react";
import UserIdInput from "./UserIdInput";
import Button from "./Button";

export default class InputForm extends React.Component {
  state = {};
  onChange = dataFromForm => {
    this.setState({ dataFromForm }, () => console.log("onChange", this.state));
  };

  render() {
    return (
      <div>
        <UserIdInput onChange={this.onChange} />
        <Button onClick={this.props.onClick} data={this.state.dataFromForm} />
      </div>
    );
  }
}
