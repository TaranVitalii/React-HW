import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getAlbums } from "../../store/selectors/users";
import { getPhotosAxios } from "../../store/actions/usersAlbumsPhotosLikes";

const AlbumsContainer = Component =>
  class AlbumsContainer extends React.Component {
    onClickHandler = e => {
      let id = Number(e.target.getAttribute("id"));
      this.props.getPhotosAxios(id);
    };

    render() {
      const { albums } = this.props;

      return albums.length > 0 ? (
        <Component {...this.props} onClickHandler={this.onClickHandler} />
      ) : null;
    }
  };

function mapStateToProps(state) {
  return { albums: getAlbums(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { getPhotosAxios }
  ),
  AlbumsContainer
);
