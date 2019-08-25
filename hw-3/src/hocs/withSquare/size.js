import React from "react";
import styleUpdate from "../../utils/updateStyle";

const BigSize = BigSize =>
  class extends React.Component {
    state = {
      dragged: null,
      style: null
    };

    checkSquare = () => {
      const count = this.props.count;

      if (count % 3 === 0) {
        let bigSizeStyle = {
          width: "120px",
          height: "120px"
        };
        let styleUpdated = styleUpdate(this.props.style, bigSizeStyle);
        this.setState({ dragged: this.props.dragged, style: styleUpdated });
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
      return <BigSize {...this.props} {...this.state} />;
    }
  };
export default BigSize;
