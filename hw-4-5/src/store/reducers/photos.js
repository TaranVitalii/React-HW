import { successAction, failureAction } from "../types";
import { GET_PHOTOS } from "../constants.js";

const initialState = {
  data: []
};

export default function Photos(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state
      };
    case successAction(GET_PHOTOS):
      return {
        data: action.payload
      };
    case failureAction(GET_PHOTOS):
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
