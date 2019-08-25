import React from "react";
import styleUpdate from "../../utils/updateStyle";

const BorderStyle = BorderStyle =>
  class extends React.Component {
    state = {
      dragged: null
    };

    checkSquare = () => {
      const count = this.props.count;
      let borderStyle = { border: "dotted" };
      let styleUpdated = styleUpdate(this.props.style, borderStyle);
      if (count % 4 === 0) {
        this.setState({ dragged: false, style: styleUpdated });
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

      return <BorderStyle {...this.props} {...state} />;
    }
  };

export default BorderStyle;
