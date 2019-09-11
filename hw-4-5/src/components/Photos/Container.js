import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getPhotos } from "../../store/selectors/users";

const PhotosContainer = Component =>
  class PhotosContainer extends React.Component {
    render() {
      const { photos } = this.props;
      return photos.length > 0 ? <Component photos={photos} /> : null;
    }
  };

function mapStateToProps(state) {
  return { photos: getPhotos(state) };
}

export default compose(
  connect(mapStateToProps),
  PhotosContainer
);
