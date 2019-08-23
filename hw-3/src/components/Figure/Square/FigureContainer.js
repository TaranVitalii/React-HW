import React from "react";
import Button from "../../Button";
import Square from "./Figure";

export default class FigureContainerSquare extends React.Component {
  state = {
    count: 0,
    elementsFigure: []
  };

  onClick = () => {
    let count = this.state.count + 1;
    let elementsFigure = this.state.elementsFigure;
    elementsFigure.push(count);
    this.setState({ count: count, elementsFigure: elementsFigure }, () =>
      console.log(this.state, "state")
    );
  };

  onClickHandler = e => {
    this.onClick();
  };

  destroyElement = elem => {
    let elementsFigure = this.state.elementsFigure;
    elementsFigure.splice(elementsFigure.findIndex(x => x === elem), 1);
    this.setState({ elementsFigure: elementsFigure }, () =>
      console.log("element destroy")
    );
  };

  dragStart = e => {
    e.dataTransfer.setData("count", e.target.count);
  };

  dragEnd = e => {};

  render() {
    let elementsFigure = this.state.elementsFigure;
    return (
      <div className="squareHeaders">
        <Button onClickHandler={this.onClickHandler} figure="square" />
        {elementsFigure.map(elem => (
          <Square
            count={elem}
            key={elem}
            dragStart={this.dragStart}
            dragEnd={this.dragEnd}
          />
        ))}
      </div>
    );
  }
}
