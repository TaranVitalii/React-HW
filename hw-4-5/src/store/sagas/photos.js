import { takeLatest, call, put } from "redux-saga/effects";
import { GET_PHOTOS, UPDATE_PHOTOS } from "../constants";
import getPhotos from "../../services/getPhotos";
import makeAsyncRequest from "./makeAsyncRequest";
import { loadState } from "../localStorage";

function* getPhotosWithId(mainAction) {
  if (loadState(mainAction.payload)) {
    return yield put({
      type: UPDATE_PHOTOS,
      payload: loadState(mainAction.payload)
    });
  }
  const action = () =>
    call(() => {
      return getPhotos().then(photos => {
        const userPhoto = photos.data.filter(
          photo => photo.albumId === mainAction.payload
        );
        const userPhotoWithLike = userPhoto.map(photo => {
          return { ...photo, like: 0 };
        });
        return userPhotoWithLike;
      });
    });

  yield makeAsyncRequest(action, GET_PHOTOS);
}

function* watchGetPhotos() {
  yield takeLatest(GET_PHOTOS, getPhotosWithId);
}

export default [watchGetPhotos];
