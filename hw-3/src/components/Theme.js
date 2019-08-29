import React from "react";
import Container from "./Container";
import Button from "./Button";
import StoreContext from "../contexts/Theme";

class Theme extends React.Component {
  state = {
    theme: "light",
    themeButton: "lightButton"
  };

  clickHandler = e => {
    if (this.state.theme === "light") {
      let style = "dark";
      let themeButton = "darkButton";
      this.setState({
        theme: style,
        themeButton: themeButton
      });
    } else if (this.state.theme === "dark") {
      let style = "light";
      let themeButton = "lightButton";
      this.setState({
        theme: style,
        themeButton: themeButton
      });
    }
  };

  render() {
    const state = {
      themeButton: this.state.themeButton
    };

    return (
      <StoreContext.Provider value={state}>
        {
          <div className={this.state.theme}>
            <Button
              onClickHandler={this.clickHandler}
              figure="theme"
              className={this.state.themeButton}
            />
            <Container />
          </div>
        }
      </StoreContext.Provider>
    );
  }
}
export default Theme;
