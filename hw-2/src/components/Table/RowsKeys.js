import React from "react";
import "./rows.css";

export default props => {
  const keysFromData = Object.keys(props.data);

  const component = keysFromData.map(elem => <th>{elem}</th>);
  return <tr>{component}</tr>;
};
