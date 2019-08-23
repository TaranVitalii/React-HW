import React from "react";

const FigureSquareBorder = FigureSquareBorder =>
  class extends React.Component {
    state = {
      dragged: null,
      style: null
    };
    checkSquare = () => {
      const count = this.props.count;

      if (count % 4 === 0) {
        let style = {
          width: "60px",
          height: "60px",
          background: "blue",
          margin: "10px",
          border: "dotted"
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

      return <FigureSquareBorder {...this.props} {...state} />;
    }
  };

export default FigureSquareBorder;
