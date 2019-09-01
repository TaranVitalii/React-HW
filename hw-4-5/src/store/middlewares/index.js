import { compose, applyMiddleware } from "redux";
import users from "./users";
import albums from "./albums";
import photos from "./photos";
import like from "./like";

const g = global || window;
const composeEnhancers =
  typeof g === "object" && g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const middleware = [users, albums, photos, like];

export default composeEnhancers(applyMiddleware(...middleware));
