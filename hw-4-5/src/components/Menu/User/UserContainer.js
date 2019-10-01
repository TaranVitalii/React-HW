import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getAlbums } from "../../../store/actions/albums";

const UserContainer = Component =>
  class UserContainer extends React.Component {
    onClickHandler = e => {
      this.props.getAlbums(this.props.id);
    };

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

export default compose(
  connect(
    null,
    { getAlbums }
  ),
  UserContainer
);
