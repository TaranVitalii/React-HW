import React from "react";
import randomColor from "../../utils/createColor";
import exist20chance from "../../utils/exist20chance";

const FigureCircleRandomColor = FigureCircleRandomColor =>
  class extends React.Component {
    state = {};

    onClickHandler = e => {
      if (exist20chance()) {
        this.props.destroy(this.props.elem, e.target.className);
      } else {
        let newColor = { background: randomColor() };
        this.setState({ style: newColor });
      }
    };

    render() {
      const state = {
        handler: this.onClickHandler,
        style: this.state.style
      };
      return <FigureCircleRandomColor {...this.props} {...state} />;
    }
  };

export default FigureCircleRandomColor;
