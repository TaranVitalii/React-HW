import React from "react";
import Button from "../../Button";
import Triangle from "./Figure";

export default class FigureContainerTriangle extends React.Component {
  state = { count: 0, elementsFigure: [] };

  onClick = () => {
    let count = this.state.count + 1;
    let elementsFigure = this.state.elementsFigure;
    elementsFigure.push(count);

    let style = {
      width: 0,
      height: 0,
      borderBottom: "100px solid red",
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
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

  onDragOver = e => {
    e.preventDefault();
  };

  drop = e => {
    if (e.target.className === "triangle") {
      console.log("droped");
      //тут должен быть код по удалению елемента из массива квадратов но я хз как туда достучаться
    }
  };

  render() {
    let elementsFigure = this.state.elementsFigure;
    return (
      <div className="triangleHeaders">
        <Button onClickHandler={this.onClickHandler} figure="triangle" />
        {elementsFigure.map(elem => (
          <Triangle
            style={this.state.style}
            destroy={this.destroyElement}
            key={elem}
            elem={elem}
            onDragOver={this.onDragOver}
            onDrop={this.drop}
          />
        ))}
      </div>
    );
  }
}
