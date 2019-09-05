import React from "react";

const ImgLoad = ImgLoad =>
  class extends React.Component {
    state = { className: "triangle" };

    clickHandler = e => {
      if (e.target.className === "triangle") {
        this.setState({ className: "triangleImg" });
      } else {
        this.setState({ className: this.props.className });
      }
    };

    render() {
      const state = {
        handler: this.clickHandler,
        className: this.state.className
      };

      return <ImgLoad {...this.props} {...state} />;
    }
  };
export default ImgLoad;
