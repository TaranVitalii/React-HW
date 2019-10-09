import { takeLatest, call } from "redux-saga/effects";
import { GET_ALBUMS } from "../constants";
import getUsersAlbums from "../../services/getUsersAlbums";

import makeAsyncRequest from "./makeAsyncRequest";

function* getAlbums(mainAction) {
  const action = () =>
    call(() => {
      return getUsersAlbums().then(albums => {
        const albumsWithId = albums.data.filter(
          album => album.userId === mainAction.payload
        );
        return albumsWithId;
      });
    });
  yield makeAsyncRequest(action, GET_ALBUMS);
}

function* watchGetAlbums() {
  yield takeLatest(GET_ALBUMS, getAlbums);
}

export default [watchGetAlbums];
