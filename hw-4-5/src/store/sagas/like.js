import { takeLetest, call } from "redux-saga/effects";
import { POST_LIKE } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* postLike() {
  const action = () => call(postLike);
  yield makeAsyncRequest(action, POST_LIKE);
}

function* watchPostLike() {
  yield takeLetest(POST_LIKE, postLike);
}

export default [watchPostLike];
