import { GET_PHOTOS, UPDATE_PHOTOS } from "../constants";

export function getPhotos(id) {
  return {
    type: GET_PHOTOS,
    payload: id
  };
}
export function updatePhoto(value) {
  return {
    type: UPDATE_PHOTOS,
    payload: value
  };
}
