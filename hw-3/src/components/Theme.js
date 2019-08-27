import React from "react";
import Container from "./Container";
import Button from "./Button";
import styles from "../styles/Figure";
import StoreContext from "../contexts/Theme";

class Theme extends React.Component {
  state = {
    styleButton: styles.styleButtonLight,
    styleBackground: styles.styleBackgroundLight,
    theme: "light"
  };

  clickHandler = e => {
    if (this.state.theme === "light") {
      let style = "dark";
      this.setState({
        styleButton: styles.styleButtonDark,
        styleBackground: styles.styleBackgroundDark,
        theme: style
      });
    } else if (this.state.theme === "dark") {
      let style = "light";
      this.setState({
        styleButton: styles.styleButtonLight,
        styleBackground: styles.styleBackgroundLight,
        theme: style
      });
    }
  };

  render() {
    const theme = {
      styleButton: this.state.styleButton,
      styleBackground: this.state.styleBackground
    };

    return (
      <StoreContext.Provider value={theme}>
        {
          <div className="theme" style={this.state.styleBackground}>
            <Button
              onClickHandler={this.clickHandler}
              figure="theme"
              styleButton={this.state.styleButton}
            />
            <Container />
          </div>
        }
      </StoreContext.Provider>
    );
  }
}
export default Theme;
