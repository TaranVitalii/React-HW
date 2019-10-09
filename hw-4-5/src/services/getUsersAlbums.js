import axios from "axios";

const getUsersAlbums = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/albums/`);
};
export default getUsersAlbums;
