import { takeLetest, call } from "redux-saga/effects";
import { GET_USERS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getUsers() {
  const action = () => call(getUsers);
  yield makeAsyncRequest(action, GET_USERS);
}

function* watchGetUsers() {
  yield takeLetest(GET_USERS, getUsers);
}

export default [watchGetUsers];
