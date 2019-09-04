import {
  GET_USERS,
  GET_ALBUMS,
  GET_PHOTOS,
  POST_LIKE,
  UPDATE_PHOTOS
} from "../constants";

export function getUsersAxios() {
  return {
    type: GET_USERS
  };
}

export function getAlbumsAxios(id) {
  return {
    type: GET_ALBUMS,
    payload: id
  };
}

export function getPhotosAxios(id) {
  return {
    type: GET_PHOTOS,
    payload: id
  };
}

export function postLikesAxios(value, id, photoAlbumId) {
  return {
    type: POST_LIKE,
    payload: { value, id, photoAlbumId }
  };
}
export function updatePhoto(value) {
  return {
    type: UPDATE_PHOTOS,
    payload: value
  };
}
