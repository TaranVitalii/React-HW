import React from "react";
import getProfile from "../services/getProfile";
import Rows from "./Table/Table";

class Profile extends React.Component {
  state = {};

  componentDidUpdate(prevProps) {
    if (this.props.data === undefined || this.props.data === "") {
      return alert("You should enter userId to continue");
    }
    if (this.props.data > 10) {
      return alert("User not found");
    }
    if (this.props.data) {
      if (this.props.data !== prevProps.data) {
        getProfile(this.props.data).then(res =>
          this.setState({ res }, () => console.log(this.state.res.data))
        );
      }
    }
  }

  render() {
    const values = this.state.res;
    return values ? <Rows data={this.state.res} /> : null;
  }
}
export default Profile;
