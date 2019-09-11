import { takeLatest, call } from "redux-saga/effects";

import { GET_USERS } from "../constants";
import getUsers from "../../services/getUsers";
import makeAsyncRequest from "./makeAsyncRequest";

function* getUsersRequest() {
  const action = () => call(getUsers);
  yield makeAsyncRequest(action, GET_USERS);
}

function* watchGetUsers() {
  yield takeLatest(GET_USERS, getUsersRequest);
}

export default [watchGetUsers];
