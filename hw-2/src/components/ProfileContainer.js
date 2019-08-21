import React from "react";
import InputForm from "./Input";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  state = {
    userId: null
  };

  onClick = userId => {
    this.setState({ userId }, () => console.log("Container", this.state));
  };

  render() {
    return (
      <div className="ProfileContainer">
        <InputForm onClick={this.onClick} />
        <div>
          <Profile userId={this.state.userId} />
        </div>
      </div>
    );
  }
}
export default ProfileContainer;
