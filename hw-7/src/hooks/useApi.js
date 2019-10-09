import { useState, useEffect } from "react";
import { reqOnLink } from "../services";

function useApi(url) {
  const [toDo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    reqOnLink(url)
      .then(todo => {
        setError("");
        setTodo(todo.data);
      })
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return {
    toDo,
    loading,
    error
  };
}
export default useApi;
