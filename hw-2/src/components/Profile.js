import React from "react";
import getProfile from "../services/getProfile";
import RowsKeys from "./Table/RowsKeys";
import RowsValues from "./Table/RowsValue";

class Profile extends React.Component {
  state = {
    data: {}
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      getProfile(this.props.responseData).then(res =>
        this.setState({ data: res.data })
      );
    }
  }

  render() {
    return (
      <tbody>
        <RowsKeys data={this.state.data} />
        <RowsValues data={this.state.data} />
      </tbody>
    );
  }
}
export default Profile;
