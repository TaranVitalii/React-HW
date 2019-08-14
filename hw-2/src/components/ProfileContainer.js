import React from "react";
import InputForm from "./InputForm";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  state = {};

  onSubmit = dataFromForm => {
    this.setState({ dataFromForm }, () => console.log("Container", this.state));
  };

  render() {
    return (
      <div className="ProfileContainer">
        <InputForm onclick={this.onSubmit} />
        <div>
          <Profile s={this.state.dataFromForm} />
        </div>
      </div>
    );
  }
}
export default ProfileContainer;
