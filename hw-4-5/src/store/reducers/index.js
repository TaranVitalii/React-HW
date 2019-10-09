import { combineReducers } from "redux";

import user from "./user";
import albums from "./ablums";
import photos from "./photos";
import like from "./like";

export default combineReducers({
  user,
  albums,
  photos,
  like
});
