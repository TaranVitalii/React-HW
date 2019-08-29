import React from "react";
import FigureSquare from "./Figure/Square/FigureContainer";
import FigureCircle from "./Figure/Circle/FigureContainer";
import FigureTriangle from "./Figure/Triangle/FigureContainer";
import withoutDestroyElement from "../utils/destroyElement";
import createNewFigure from "../utils/createNewFigure";
import "./Container.css";

class Container extends React.Component {
  state = {
    countSquare: 0,
    elementsSquare: [],

    countCircle: 0,
    elementsCircle: [],

    countTriangle: 0,
    elementsTriangle: []
  };

  onClickSquareHandler = e => {
    const elementsFigure = this.state.elementsSquare;
    const nextCount = this.state.countSquare + 1;
    const plusNewElementsFigure = [...elementsFigure, nextCount];
    this.setState({
      countSquare: nextCount,
      elementsSquare: plusNewElementsFigure
    });
  };
  onClickCircleHandler = e => {
    const elementsFigure = this.state.elementsCircle;
    const plusNewElementsFigure = createNewFigure(elementsFigure);
    this.setState({
      elementsCircle: plusNewElementsFigure
    });
  };
  onClickTriangleHandler = e => {
    const elementsFigure = this.state.elementsTriangle;
    const plusNewElementsFigure = createNewFigure(elementsFigure);
    this.setState({
      elementsTriangle: plusNewElementsFigure
    });
  };

  destroyElement = (elem, className) => {
    if (className === "circle") {
      const elementsFigure = this.state.elementsCircle;
      const withoutElement = withoutDestroyElement(elem, elementsFigure);
      this.setState({ elementsCircle: withoutElement });
    } else if (className === "triangle") {
      const elementsFigure = this.state.elementsSquare;
      const withoutElement = withoutDestroyElement(elem, elementsFigure);
      this.setState({ elementsSquare: withoutElement });
    }
  };

  render() {
    return (
      <div className="theme">
        <FigureSquare
          count={this.state.countSquare}
          onClickHandler={this.onClickSquareHandler}
          squares={this.state.elementsSquare}
        />
        <FigureCircle
          circles={this.state.elementsCircle}
          onClickHandler={this.onClickCircleHandler}
          destroy={this.destroyElement}
        />
        <FigureTriangle
          triangles={this.state.elementsTriangle}
          onClickHandler={this.onClickTriangleHandler}
          destroy={this.destroyElement}
        />
      </div>
    );
  }
}

export default Container;
