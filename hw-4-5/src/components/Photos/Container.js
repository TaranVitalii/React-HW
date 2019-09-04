import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getPhotos, getLike } from "../../store/selectors/users";
import { postLikesAxios } from "../../store/actions/usersAlbumsPhotosLikes";

const PhotosContainer = Component =>
  class PhotosContainer extends React.Component {
    onClickHandler = e => {
      let photoAlbumId = e.target.closest(".photo").getAttribute("albumid"); /// for save in localStorage
      let idPhoto = Number(e.target.closest(".photo").id); // for add likes
      let likes = Number(e.target.closest(".likes").textContent); //like counter
      this.props.postLikesAxios(likes, idPhoto, photoAlbumId);
    };

    render() {
      const { photos } = this.props;
      return photos.length > 0 ? (
        <Component photos={photos} onClickHandler={this.onClickHandler} />
      ) : null;
    }
  };

function mapStateToProps(state) {
  return { like: getLike(state), photos: getPhotos(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { postLikesAxios }
  ),
  PhotosContainer
);
