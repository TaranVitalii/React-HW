import React from "react";

import "./rows.css";

export default props => {
  const valuesFromData = Object.values(props.data);
  console.log(valuesFromData);
  //   const component = keysFromData.map(elem => <th>{elem}</th>);
  return <tr>{null}</tr>;
};
