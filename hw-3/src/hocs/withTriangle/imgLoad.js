import React from "react";
import checkPropStyle from "../../utils/checkPropStyle";

const ImgLoad = ImgLoad =>
  class extends React.Component {
    state = {};

    clickHandler = e => {
      if (e.target.className === "triangle") {
        this.setState({
          style: {
            backgroundImage: "url(" + require("../../logo.png") + ")",
            width: "100px",
            height: "100px"
          }
        });
      } else {
        this.setState({ style: this.props.style });
      }
    };

    render() {
      const hand = { handler: this.clickHandler };
      const style = {
        style: checkPropStyle(this.state.style, this.props.style)
      };
      const state = { ...hand, ...style };

      return <ImgLoad {...this.props} {...state} />;
    }
  };
export default ImgLoad;
