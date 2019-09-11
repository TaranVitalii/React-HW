import postLike from "../../services/postLike";
import { failureAction } from "../types";
import { POST_LIKE, UPDATE_PHOTOS } from "../constants";
import { saveState } from "../localStorage";

export default store => next => action => {
  if (action.type === POST_LIKE) {
    postLike()
      .finally(() => {
        const { photos } = store.getState(); //get photos in store , and add new like
        let updatePhotos = photos.data.map(elem =>
          elem.id === action.payload.id
            ? { ...elem, like: action.payload.value + 1 }
            : elem
        );
        saveState(action.payload.photoAlbumId, updatePhotos); // save store in LocalStorage
        console.log("save");
        store.dispatch({
          // after like dispatch action UPDATE_Photos wit new array photos.
          type: UPDATE_PHOTOS,
          payload: updatePhotos
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
