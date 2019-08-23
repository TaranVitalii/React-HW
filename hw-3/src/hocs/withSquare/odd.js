import React from "react";

const FigureSquareOdd = FigureSquareOdd =>
  class extends React.Component {
    state = {
      dragged: null,
      style: null
    };
    checkSquare = () => {
      const count = this.props.count;

      if (!count || count % 2 === 1) {
        let style = {
          width: "60px",
          height: "60px",
          background: "blue",
          margin: "10px"
        };
        this.setState({ dragged: true, style: style });
      } else {
        this.setState({ dragged: this.props.dragged, style: this.props.style });
      }
    };

    componentDidMount() {
      this.checkSquare();
    }

    render() {
      const state = {
        dragged: this.state.dragged,
        style: this.state.style
      };
      return <FigureSquareOdd {...this.props} {...state} />;
    }
  };
export default FigureSquareOdd;
