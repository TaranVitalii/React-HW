import React from "react";

const OddElementDragged = OddElementDragged =>
  class extends React.Component {
    state = {
      dragged: null,
      className: null
    };

    checkSquare = () => {
      const count = this.props.count;

      if (!count || count % 2 === 1) {
        this.setState({ dragged: true, className: "squareOdd" });
      } else {
        this.setState({
          dragged: this.props.dragged,
          className: this.props.className
        });
      }
    };

    componentDidMount() {
      this.checkSquare();
    }

    render() {
      return <OddElementDragged {...this.props} {...this.state} />;
    }
  };
export default OddElementDragged;
