import React from "react";
import InputForm from "./InputForm";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  state = {
    dataForm: {},
    data: {}
  };

  onSubmit = dataFromForm => {
    this.setState({ dataForm: dataFromForm });
  };

  render() {
    return (
      <div className="ProfileContainer">
        <InputForm inputData={this.onSubmit} />
        <table>
          <Profile responseData={this.state.dataForm} />
        </table>
      </div>
    );
  }
}
export default ProfileContainer;
