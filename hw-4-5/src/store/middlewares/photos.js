import getPhotos from "../../services/getPhotos";
import { successAction, failureAction } from "../types";
import { GET_PHOTOS } from "../constants";
import { loadState } from "../localStorage";

export default store => next => action => {
  if (action.type === GET_PHOTOS) {
    if (loadState(action.payload)) {
      //if we have in local storage state with serching album , load from local else request on JSONPLACEHOLDER
      store.dispatch({
        type: successAction(GET_PHOTOS),
        payload: loadState(action.payload)
      });
    } else {
      getPhotos()
        .then(photos => {
          const userPhoto = photos.data.filter(
            photo => photo.albumId === action.payload
          );
          const userPhotoWithLike = userPhoto.map(photo => {
            return { ...photo, like: 0 };
          });
          store.dispatch({
            type: successAction(GET_PHOTOS),
            payload: userPhotoWithLike
          });
        })
        .catch(error =>
          store.dispatch({
            type: failureAction(GET_PHOTOS),
            error
          })
        );
    }
  } else {
    return next(action);
  }
};
