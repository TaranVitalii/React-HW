import React from "react";

const EvenElement = EvenElement =>
  class extends React.Component {
    state = {
      dragged: null
    };

    checkSquare = () => {
      const count = this.props.count;
      if (count % 2 === 0) {
        this.setState({ dragged: false });
      } else {
        this.setState({ dragged: this.props.dragged });
      }
    };

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.checkSquare();
      }
    }

    render() {
      return <EvenElement {...this.props} {...this.state} />;
    }
  };
export default EvenElement;
