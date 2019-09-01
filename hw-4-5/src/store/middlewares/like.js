import postLike from "../../services/postLike";
import { successAction, failureAction } from "../types";
import { POST_LIKE } from "../constants";

export default store => next => action => {
  if (action.type === POST_LIKE) {
    postLike(action.payload)
      .finally(() => {
        store.dispatch({
          type: successAction(POST_LIKE),
          payload: {
            value: action.payload + 1
          }
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(POST_LIKE),
          error
        })
      );
  } else {
    return next(action);
  }
};
