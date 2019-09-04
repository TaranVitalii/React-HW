import React from "react";
import DropDownMenu from "./Menu";
import Albums from "./Albums";
import Photos from "./Photos";

export default class MainContainer extends React.Component {
  state = {};

  render() {
    return (
      <div className="mainContainer">
        <DropDownMenu />
        <Albums />
        <Photos />
      </div>
    );
  }
}
