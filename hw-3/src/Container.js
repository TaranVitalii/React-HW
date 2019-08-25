import React from "react";
import FigureContaineSquare from "./components/Figure/Square/FigureContainer";
import FigureContainerCircle from "./components/Figure/Circle/FigureContainer";
import FigureContainerTriangle from "./components/Figure/Triangle/FigureContainer";
import "./Container.css";

class Container extends React.Component {
  state = {
    countSquare: 0,
    elementsSquare: [],
    styleSquare: {
      width: "60px",
      height: "60px",
      background: "blue",
      margin: "10px"
    },
    countCircle: 0,
    elementsCircle: [],
    styleCircle: {
      width: "120px",
      height: "120px",
      borderRadius: "60px",
      background: "green",
      margin: "10px"
    },
    countTriangle: 0,
    elementsTriangle: [],
    styleTriangle: {
      width: 0,
      height: 0,
      borderBottom: "100px solid red",
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      margin: "10px"
    }
  };

  onClick = (click, figure) => {
    if (figure === "square") {
      const elementsFigure = this.state.elementsSquare;
      const nextCount = this.state.countSquare + click;
      const plusNewElementsFigure = [...elementsFigure, nextCount];
      this.setState({
        countSquare: nextCount,
        elementsSquare: plusNewElementsFigure
      });
    } else if (figure === "circle") {
      const elementsFigure = this.state.elementsCircle;
      const nextCount = this.state.countCircle + click;
      const plusNewElementsFigure = [...elementsFigure, nextCount];
      this.setState({
        countCircle: nextCount,
        elementsCircle: plusNewElementsFigure
      });
    } else if (figure === "triangle") {
      const elementsFigure = this.state.elementsTriangle;
      const nextCount = this.state.countTriangle + click;
      const plusNewElementsFigure = [...elementsFigure, nextCount];
      this.setState({
        countTriangle: nextCount,
        elementsTriangle: plusNewElementsFigure
      });
    }
  };

  onClickHandler = e => {
    this.onClick(1, e.target.textContent);
  };

  destroyElement = (elem, className) => {
    if (className === "circle") {
      const elementsFigure = this.state.elementsCircle;
      const withoutDestroyElement = elementsFigure.filter(
        item => item !== elem
      );
      this.setState({ elementsCircle: withoutDestroyElement });
    } else if (className === "triangle") {
      const elementsFigure = this.state.elementsSquare;
      const withoutDestroyElement = elementsFigure.filter(
        item => item !== elem
      );
      this.setState({ elementsSquare: withoutDestroyElement });
    }
  };

  render() {
    return (
      <div className="theme">
        <FigureContaineSquare
          count={this.state.countSquare}
          style={this.state.styleSquare}
          onClickHandler={this.onClickHandler}
          squares={this.state.elementsSquare}
          styleButton={this.props.style}
        />
        <FigureContainerCircle
          count={this.state.countCircle}
          circles={this.state.elementsCircle}
          onClickHandler={this.onClickHandler}
          style={this.state.styleCircle}
          destroy={this.destroyElement}
          styleButton={this.props.style}
        />
        <FigureContainerTriangle
          count={this.state.countTriangle}
          triangles={this.state.elementsTriangle}
          onClickHandler={this.onClickHandler}
          style={this.state.styleTriangle}
          destroy={this.destroyElement}
          styleButton={this.props.style}
        />
      </div>
    );
  }
}

export default Container;
