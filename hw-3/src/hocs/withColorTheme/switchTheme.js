import React from "react";

const SwitchTheme = SwitchTheme =>
  class extends React.Component {
    state = {
      styleButton: {
        width: "150px",
        height: "100px",
        color: "black",
        textDecoration: "none",
        userSelect: "none",
        background: "silver",
        padding: "0.7em 1.5em",
        outline: "none"
      },
      styleBackground: {
        "background-color": "#dae2f0"
      },
      style: "light"
    };

    clickHandler = e => {
      if (this.state.style === "light") {
        let styleButtonLight = this.state.styleButton;
        let editStyleDark = { color: "silver", background: "black" };
        let styleBackGroundDark = { "background-color": "#333331" };
        let style = "dark";
        let styleButtonDark = { ...styleButtonLight, ...editStyleDark };
        this.setState({
          styleButton: styleButtonDark,
          styleBackground: styleBackGroundDark,
          style: style
        });
      } else if (this.state.style === "dark") {
        let styleButtonDark = this.state.styleButton;
        let editStyleLight = { color: "black", background: "silver" };
        let styleBackGroundLight = { "background-color": "#dae2f0" };
        let style = "light";
        let styleButtonLight = { ...styleButtonDark, ...editStyleLight };
        this.setState({
          styleButton: styleButtonLight,
          styleBackground: styleBackGroundLight,
          style: style
        });
      }
    };

    render() {
      const state = {
        onClickHandler: this.clickHandler,
        styleTheme: this.state.styleButton,
        styleBackground: this.state.styleBackground
      };
      return <SwitchTheme {...this.props} {...state} />;
    }
  };
export default SwitchTheme;
