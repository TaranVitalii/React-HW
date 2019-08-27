import React from "react";
import randomColor from "../../utils/createColor";
import styleUpdate from "../../utils/updateStyle";
import exist20chance from "../../utils/exist20chance";

const FigureCircleRandomColor = FigureCircleRandomColor =>
  class extends React.Component {
    state = {};

    onClickHandler = e => {
      if (exist20chance()) {
        this.props.destroy(this.props.elem, e.target.className);
      } else {
        let style = this.props.style;
        let newColor = { background: randomColor() };
        let newStyleWithRandomColor = styleUpdate(style, newColor);
        this.setState({ style: newStyleWithRandomColor });
      }
    };

    componentDidMount() {
      this.setState({ style: this.props.style });
    }

    render() {
      const state = {
        handler: this.onClickHandler,
        style: this.state.style
      };
      return <FigureCircleRandomColor {...this.props} {...state} />;
    }
  };

export default FigureCircleRandomColor;
