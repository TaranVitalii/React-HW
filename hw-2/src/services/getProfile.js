import axios from "axios";

const getProfile = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export default getProfile;
