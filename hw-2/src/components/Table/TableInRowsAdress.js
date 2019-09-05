import React from "react";
import RowsBody from "./RowsBody";

export default props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <RowsBody name="street" value={props.value.address.street} />
        <RowsBody name="suite" value={props.value.address.suite} />
        <RowsBody name="city" value={props.value.address.city} />
        <RowsBody name="zipcode" value={props.value.address.zipcode} />
        <tr>
          {/* <td>geo</td>
          <RowsBody name="lat" value={props.value.address.geo.lat} />
          <RowsBody name="lng" value={props.value.address.geo.lng} /> */}
        </tr>
      </td>
    </tr>
  );
};
