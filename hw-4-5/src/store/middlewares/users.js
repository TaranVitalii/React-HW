import getUsers from "../../services/getUsers";
import { successAction, failureAction } from "../types";
import { GET_USERS } from "../constants";

export default store => next => action => {
  if (action.type === GET_USERS) {
    getUsers(action.payload)
      .then(users =>
        store.dispatch({
          type: successAction(GET_USERS),
          payload: users.data
        })
      )
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_USERS),
          error
        })
      );
  } else {
    return next(action);
  }
};
