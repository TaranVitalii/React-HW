import { takeLetest, call } from "redux-saga/effects";
import { GET_PHOTOS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getPhotos() {
  const action = () => call(getPhotos);
  yield makeAsyncRequest(action, GET_PHOTOS);
}

function* watchGetPhotos() {
  yield takeLetest(GET_PHOTOS, getPhotos);
}

export default [watchGetPhotos];
