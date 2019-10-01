import axios from "axios";

const getUsers = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};
export default getUsers;
