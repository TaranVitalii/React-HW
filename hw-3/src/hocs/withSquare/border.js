import React from "react";

const BorderStyle = BorderStyle =>
  class extends React.Component {
    state = {
      dragged: null,
      className: null
    };

    checkSquare = () => {
      const count = this.props.count;
      if (count % 4 === 0) {
        this.setState({ dragged: false, className: "squareBorder" });
      } else {
        this.setState({
          dragged: this.props.dragged,
          className: this.props.className
        });
      }
    };

    componentDidUpdate(prevProps) {
      if (prevProps.className !== this.props.className) {
        this.checkSquare();
      }
    }

    render() {
      const state = {
        dragged: this.state.dragged,
        className: this.state.className
      };
      return <BorderStyle {...this.props} {...state} />;
    }
  };

export default BorderStyle;
