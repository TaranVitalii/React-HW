import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { postLikes } from "../../../store/actions/like";

const PhotosContainer = Component =>
  class PhotosContainer extends React.Component {
    onClickHandler = e => {
      const { like, id, albumid } = this.props;
      this.props.postLikes(like, id, albumid);
    };

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

export default compose(
  connect(
    null,
    { postLikes }
  ),
  PhotosContainer
);
