import React from "react";
import RowsHead from "./RowsHead";
import RowsBody from "./RowsBody";
import TableInRowsAdress from "./TableInRowsAdress";
import TableInRowsCompany from "./TableInRowsCompany";
import "./table.css";

const Table = props => {
  const { data } = props.data;
  const value = "Value";
  const property = "Property";

  return (
    <table>
      <thead>
        <RowsHead value={value} property={property} />
      </thead>
      <tbody>
        <RowsBody name="id" value={data.id} />
        <RowsBody name="name" value={data.name} />
        <RowsBody name="username" value={data.username} />
        <RowsBody name="email" value={data.email} />
        <TableInRowsAdress name="address" value={data} />
        <RowsBody name="phone" value={data.phone} />
        <RowsBody name="website" value={data.website} />
        <TableInRowsCompany name="company" value={data} />
      </tbody>
    </table>
  );
};
export default Table;
