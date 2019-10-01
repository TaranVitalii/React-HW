import { POST_LIKE } from "../constants";

export function postLikes(value, id, photoAlbumId) {
  return {
    type: POST_LIKE,
    payload: { value, id, photoAlbumId }
  };
}
