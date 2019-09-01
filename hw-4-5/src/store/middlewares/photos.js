import getPhotos from "../../services/getPhotos";
import { successAction, failureAction } from "../types";
import { GET_PHOTOS } from "../constants";

export default store => next => action => {
  if (action.type === GET_PHOTOS) {
    getPhotos()
      .then(photos => {
        const userPhoto = photos.data.filter(
          photo => photo.albumId === action.payload
        );
        store.dispatch({
          type: successAction(GET_PHOTOS),
          payload: userPhoto
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_PHOTOS),
          error
        })
      );
  } else {
    return next(action);
  }
};
