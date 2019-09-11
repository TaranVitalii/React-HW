import React from "react";
import DropDownMenu from "./Menu";
import Albums from "./Albums";
import Photos from "./Photos";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <DropDownMenu />
      <Albums />
      <Photos />
    </div>
  );
};

export default MainContainer;
