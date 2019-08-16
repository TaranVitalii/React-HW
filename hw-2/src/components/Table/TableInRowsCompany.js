import React from "react";
import RowsBody from "./RowsBody";

export default props => {
  console.log(props);
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <RowsBody name="name" value={props.value.company.name} />
        <RowsBody name="catchPhrase" value={props.value.company.catchPhrase} />
        <RowsBody name="bs" value={props.value.company.bs} />
      </td>
    </tr>
  );
};
