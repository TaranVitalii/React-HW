import { takeLatest, call, select, putResolve } from "redux-saga/effects";
import { getPhotos } from "../selectors/users";
import { POST_LIKE, UPDATE_PHOTOS } from "../constants";
import postLike from "../../services/postLike";
import makeAsyncRequest from "./makeAsyncRequest";
import { saveState } from "../localStorage";
import { successAction, failureAction } from "../types";

function* postLikeSaga(mainAction) {
  const result = yield select(getPhotos);
  const action = () =>
    call(() => {
      return postLike().resolve(() => {
        let updatePhotos = result.map(elem =>
          elem.id === mainAction.payload.id
            ? { ...elem, like: mainAction.payload.value + 1 }
            : elem
        );
        return updatePhotos;
      });
    });

  const data = yield action();
  console.log(data);
  yield putResolve({
    type: successAction(UPDATE_PHOTOS),
    payload: data
  });
}

function* watchPostLike() {
  yield takeLatest(UPDATE_PHOTOS, postLikeSaga);
}

export default [watchPostLike];
