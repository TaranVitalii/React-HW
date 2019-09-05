import React from "react";

const BigSize = BigSize =>
  class extends React.Component {
    state = {
      dragged: null,
      className: null
    };

    checkSquare = () => {
      const count = this.props.count;

      if (count && count % 3 === 0) {
        this.setState({ dragged: this.props.dragged, className: "squareBig" });
      } else {
        this.setState({
          dragged: this.props.dragged,
          className: this.props.className
        });
      }
    };

    checkSquareBigBorder = () => {
      const count = this.props.count;
      if (count && count % 3 === 0) {
        this.setState({
          dragged: this.props.dragged,
          className: "squareBigBorder"
        });
      } else {
        this.setState({
          dragged: this.props.dragged,
          className: this.props.className
        });
      }
    };

    componentDidUpdate(prevProps) {
      if (prevProps.className !== this.props.className) {
        const count = this.props.count;

        if (count && count % 4 === 0) {
          this.checkSquareBigBorder();
        } else {
          this.checkSquare();
        }
      }
    }

    render() {
      return <BigSize {...this.props} {...this.state} />;
    }
  };
export default BigSize;
