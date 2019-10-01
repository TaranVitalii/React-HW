import { successAction, failureAction } from "../types";
import { GET_USERS } from "../constants.js";

const initialState = {
  data: []
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state
      };
    case successAction(GET_USERS):
      return {
        data: action.payload
      };
    case failureAction(GET_USERS):
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
