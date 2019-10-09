import { GET_ALBUMS } from "../constants";

export function getAlbums(id) {
  return {
    type: GET_ALBUMS,
    payload: id
  };
}
