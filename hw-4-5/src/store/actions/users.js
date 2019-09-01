import { GET_USERS, GET_ALBUMS, GET_PHOTOS, POST_LIKE } from "../constants";

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

export function postLikesAxios(value) {
  return {
    type: POST_LIKE,
    payload: value
  };
}
