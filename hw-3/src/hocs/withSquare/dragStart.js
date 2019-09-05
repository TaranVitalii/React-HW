import React from "react";

const DragStart = DragStart =>
  class extends React.Component {
    dragStart = e => {
      const count = Number(e.target.getAttribute("count"));
      e.dataTransfer.setData("count", count);
    };

    render() {
      const state = {
        dragStart: this.dragStart
      };

      return <DragStart {...this.props} {...state} />;
    }
  };

export default DragStart;
