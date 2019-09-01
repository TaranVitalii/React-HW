import { successAction, failureAction } from "../types";
import { POST_LIKE } from "../constants.js";

const initialState = {
  data: 0
};

export default function Like(state = initialState, action) {
  switch (action.type) {
    case POST_LIKE:
      return {
        ...state
      };
    case successAction(POST_LIKE):
      return {
        data: action.payload
      };
    case failureAction(POST_LIKE):
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
