import React from "react";

import "./rows.css";

const Rows = props => {
  const { data } = props.data;
  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>ID</th>
          <th>{data.id}</th>
        </tr>
        <tr>
          <th>name</th>
          <th>{data.name}</th>
        </tr>
        <tr>
          <th>username</th>
          <th>{data.username}</th>
        </tr>
        <tr>
          <th>email</th>
          <th>{data.email}</th>
        </tr>
        <tr>
          <th>address</th>
          <th>
            <tr>
              <th>street</th>
              <th>{data.address.street}</th>
            </tr>
            <tr>
              <th>suite</th>
              <th>{data.address.suite}</th>
            </tr>
            <tr>
              <th>city</th>
              <th>{data.address.city}</th>
            </tr>
            <tr>
              <th>zipcode</th>
              <th>{data.address.zipcode}</th>
            </tr>
            <tr>
              <th>geo</th>
              <th>
                <tr>
                  <th>lat</th>
                  <th>{data.address.geo.lat}</th>
                </tr>
                <tr>
                  <th>lng</th>
                  <th>{data.address.geo.lng}</th>
                </tr>
              </th>
            </tr>
          </th>
        </tr>
      </tbody>
    </table>
  );
};
export default Rows;
