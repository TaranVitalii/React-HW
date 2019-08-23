import React from "react";

const FigureCircleRandomColor = FigureCircleRandomColor =>
  class extends React.Component {
    state = {};

    createColor = () => {
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.setState({
        style: {
          width: "120px",
          height: "120px",
          borderRadius: "60px",
          background: newColor,
          margin: "10px"
        }
      });
    };

    onClickHandler = e => {
      if (Math.random() * 100 < 20) {
        this.props.destroy(this.props.elem);
      }
      this.createColor();
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
