import React from "react";

export default props => {
  return (
    <tr>
      <th>{props.property}</th>
      <th>{props.value}</th>
    </tr>
  );
};
