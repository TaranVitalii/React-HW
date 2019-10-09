import React from "react";

function ShowError({ error }) {
  return <div>{error.message}</div>;
}
export default ShowError;
