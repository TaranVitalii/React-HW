import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getPhotos } from "../../../store/actions/photos";

const AlbumContainer = Component =>
  class AlbumContainer extends React.Component {
    onClickHandler = e => {
      this.props.getPhotos(this.props.id);
    };

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

export default compose(
  connect(
    null,
    { getPhotos }
  ),
  AlbumContainer
);
