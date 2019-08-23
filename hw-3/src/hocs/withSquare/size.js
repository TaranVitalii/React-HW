import React from "react";

const FigureSquareSize = FigureSquareSize =>
  class extends React.Component {
    state = {
      dragged: null,
      style: null
    };

    checkSquare = () => {
      const count = this.props.count;

      if (count % 3 === 0) {
        let style = {
          width: "120px",
          height: "120px",
          background: "blue",
          margin: "10px"
        };
        this.setState({ dragged: true, style: style });
      } else {
        this.setState({ dragged: this.props.dragged, style: this.props.style });
      }
    };

    checkSquareBigWithBorder = () => {
      const count = this.props.count;
      if (count % 3 === 0) {
        let style = {
          width: "120px",
          height: "120px",
          background: "blue",
          margin: "10px",
          border: "dotted"
        };
        this.setState({ dragged: this.props.dragged, style: style });
      } else {
        this.checkSquare();
      }
    };

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        const count = this.props.count;
        if (count % 4 === 0) {
          this.checkSquareBigWithBorder();
        } else {
          this.checkSquare();
        }
      }
    }

    render() {
      const state = {
        dragged: this.state.dragged,
        style: this.state.style
      };

      return <FigureSquareSize {...this.props} {...state} />;
    }
  };
export default FigureSquareSize;
