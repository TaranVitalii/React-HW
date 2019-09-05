import React from "react";
import Container from "./Container";
import Button from "./Button";
import StoreContext from "../contexts/Theme";

class Theme extends React.Component {
  state = {
    theme: "light"
  };

  clickHandler = e => {
    if (this.state.theme === "light") {
      let style = "dark";
      this.setState({
        theme: style
      });
    } else if (this.state.theme === "dark") {
      let style = "light";
      this.setState({
        theme: style
      });
    }
  };

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {
          <div className={`${this.state.theme} theme`}>
            <Button
              onClickHandler={this.clickHandler}
              figure="theme"
              className={`${this.state.theme}button`}
            />
            <Container />
          </div>
        }
      </StoreContext.Provider>
    );
  }
}
export default Theme;
