import React from "react";
import useApi from "../hooks/useApi";
import Loader from "./Loader";
import Error from "./Error";

function ToDo({ url }) {
  const { toDo, loading, error } = useApi(url);
  const { userId, id, title, completed } = toDo;
  return loading ? (
    <Loader />
  ) : error ? (
    <Error error={error} />
  ) : (
    url && (
      <>
        <div>userId{userId}</div>
        <div>id{id}</div>
        <div>title{title}</div>
        <div>completed{completed}</div>
      </>
    )
  );
}
export default ToDo;
