import axios from "axios";

const postLike = value => {
  return axios.post("https://jsonplaceholder.typicode.com/photos/like", {
    like: value
  });
};
export default postLike;
