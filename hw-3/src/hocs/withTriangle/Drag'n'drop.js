import React from "react";

const DragAndDrop = DragAndDrop =>
  class extends React.Component {
    dragOver = e => {
      e.preventDefault();
    };

    drop = e => {
      if (e.target.className === "triangle") {
        let count = +e.dataTransfer.getData("count");
        this.props.destroy(count, e.target.className);
      }
    };

    render() {
      const state = {
        onDragOver: this.dragOver,
        onDrop: this.drop
      };
      return <DragAndDrop {...this.props} {...state} />;
    }
  };
export default DragAndDrop;
