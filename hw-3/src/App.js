import React from "react";
import Container from "./Container";
import Button from "./components/Button";
import SwitchTheme from "./hocs/withColorTheme/switchTheme";

function App({ styleBackground, onClickHandler, styleTheme }) {
  return (
    <div className="App" style={styleBackground}>
      <Button
        onClickHandler={onClickHandler}
        figure="theme"
        styleButton={styleTheme}
      />
      <Container style={styleTheme} />
    </div>
  );
}
export default SwitchTheme(App);
