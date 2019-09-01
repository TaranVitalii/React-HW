import getAlbums from "../../services/getUsersAlbums";
import { successAction, failureAction } from "../types";
import { GET_ALBUMS } from "../constants";

export default store => next => action => {
  if (action.type === GET_ALBUMS) {
    getAlbums()
      .then(albums => {
        const album = albums.data.filter(
          album => album.userId === action.payload
        );
        store.dispatch({
          type: successAction(GET_ALBUMS),
          payload: album
        });
      })
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_ALBUMS),
          error
        })
      );
  } else {
    return next(action);
  }
};
