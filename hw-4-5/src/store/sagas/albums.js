import { takeLetest, call } from "redux-saga/effects";
import { GET_ALBUMS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getAlbums() {
  const action = () => call(getAlbums);
  yield makeAsyncRequest(action, GET_ALBUMS);
}

function* watchGetAlbums() {
  yield takeLetest(GET_ALBUMS, getAlbums);
}

export default [watchGetAlbums];
