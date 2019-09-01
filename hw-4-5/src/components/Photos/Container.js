import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getPhotos } from "../../store/selectors/users";

const PhotosContainer = Component =>
  class PhotosContainer extends React.Component {
    // onClickHandler = e => {
    //   console.log("click");
    //   let id = Number(e.target.getAttribute("userid"));
    //   this.props.getPhotosAxios(id);
    // };

    render() {
      const { photos } = this.props;

      return photos.length > 0 ? (
        <Component {...this.props} /*onClickHandler={this.onClickHandler} */ />
      ) : null;
    }
  };

function mapStateToProps(state) {
  return { photos: getPhotos(state) };
}

export default compose(
  connect(mapStateToProps),
  PhotosContainer
);
