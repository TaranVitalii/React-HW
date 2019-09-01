import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";

import users from "./users";
import albums from "./albums";
import photos from "./photos";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [users, albums, photos];
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);
