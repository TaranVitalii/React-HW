import React from "react";

const EvenElement = EvenElement =>
  class extends React.Component {
    state = {
      dragged: null,
      className: null
    };

    checkSquare = () => {
      const count = this.props.count;
      if (count % 2 === 0) {
        this.setState({ dragged: false, className: "squareEven" });
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
      return <EvenElement {...this.props} {...this.state} />;
    }
  };
export default EvenElement;
