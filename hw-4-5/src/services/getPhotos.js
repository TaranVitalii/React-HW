import axios from "axios";

const getPhotos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos`);
};
export default getPhotos;
