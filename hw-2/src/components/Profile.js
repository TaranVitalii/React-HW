import React from "react";
import getProfile from "../services/getProfile";
import Table from "./Table/Table";
import NotFoundScreen from "./NotFoundScreen";

class Profile extends React.Component {
  state = {};

  updateUser = () => {
    getProfile(this.props.userId)
      .then(user => this.setState({ user }))
      .catch(err => this.setState({ user: null, err }));
  };

  componentDidUpdate(prevProps) {
    if (!this.props.userId) {
      return alert("You should enter userId to continue");
    }

    if (this.props.userId !== prevProps.userId) {
      this.updateUser();
    }
  }

  render() {
    const user = this.state.user;

    return user ? <Table data={user} /> : <NotFoundScreen />;
  }
}
export default Profile;
