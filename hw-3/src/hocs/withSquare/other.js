import React from "react";

const figureOther = FigureOther =>
  class extends React.Component {
    state = {
      dragged: null,
      style: null
    };
    checkSquare = () => {
      const count = this.props.count;

      if (count % 2 == 0) {
        let style = {
          width: "60px",
          height: "60px",
          background: "white",
          margin: "10px",
          opacity: 0.7
        };
        this.setState({ dragged: false, style: style });
      } else {
        this.setState({ dragged: this.props.dragged, style: this.props.style });
      }
    };

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.checkSquare();
      }
    }

    render() {
      const state = {
        dragged: this.state.dragged,
        style: this.state.style
      };
      return <FigureOther {...this.props} {...state} />;
    }
  };
export default figureOther;
