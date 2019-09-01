import { combineReducers } from "redux"; //2--- так как редьюсеров может быть много, их все надо положить в комбайн

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
