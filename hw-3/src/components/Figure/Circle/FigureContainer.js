import React from "react";
import Button from "../../Button";
import Circle from "./Figure";

export default class FigureContainerCircle extends React.Component {
  state = { count: 0, elementsFigure: [] };

  onClick = () => {
    let count = this.state.count + 1;
    let elementsFigure = this.state.elementsFigure;
    elementsFigure.push(count);

    let style = {
      width: "120px",
      height: "120px",
      borderRadius: "60px",
      background: "green",
      margin: "10px"
    };
    this.setState({
      count: count,
      elementsFigure: elementsFigure,
      style: style
    });
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

  render() {
    let elementsFigure = this.state.elementsFigure;
    return (
      <div className="circleHeaders">
        <Button onClickHandler={this.onClickHandler} figure="circle" />
        {elementsFigure.map(elem => (
          <Circle
            style={this.state.style}
            destroy={this.destroyElement}
            key={elem}
            elem={elem}
          />
        ))}
      </div>
    );
  }
}
