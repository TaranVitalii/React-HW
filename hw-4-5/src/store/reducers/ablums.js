import { successAction, failureAction } from "../types";
import { GET_ALBUMS } from "../constants.js";

const initialState = {
  data: []
};

export default function Albums(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state
      };
    case successAction(GET_ALBUMS):
      return {
        data: action.payload
      };
    case failureAction(GET_ALBUMS):
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
