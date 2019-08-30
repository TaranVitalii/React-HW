import React from "react";
import FigureSquare from "./Figure/Square/FigureContainer";
import FigureCircle from "./Figure/Circle/FigureContainer";
import FigureTriangle from "./Figure/Triangle/FigureContainer";
import withoutDestroyElement from "../utils/destroyElement";
import createNewFigure from "../utils/createNewFigure";

import "./Container.css";

class Container extends React.Component {
  state = {
    elementsSquare: [null],

    elementsCircle: [],

    elementsTriangle: []
  };

  onClickSquareHandler = e => {
    const elementsFigure = this.state.elementsSquare;
    const nextCount = elementsFigure.length;
    const plusNewElementsFigure = [...elementsFigure, nextCount];
    this.setState({
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

  destroyElementCircle = elem => {
    const elementsFigure = this.state.elementsCircle;
    const withoutElement = withoutDestroyElement(elem, elementsFigure);
    this.setState({ elementsCircle: withoutElement });
  };
  destroyElementSquare = elem => {
    const elementsFigure = this.state.elementsSquare;
    const withoutElement = withoutDestroyElement(elem, elementsFigure);
    this.setState({ elementsSquare: withoutElement });
  };

  render() {
    return (
      <div className="theme">
        <FigureSquare
          onClickHandler={this.onClickSquareHandler}
          squares={this.state.elementsSquare}
        />
        <FigureCircle
          circles={this.state.elementsCircle}
          onClickHandler={this.onClickCircleHandler}
          destroy={this.destroyElementCircle}
        />
        <FigureTriangle
          triangles={this.state.elementsTriangle}
          onClickHandler={this.onClickTriangleHandler}
          destroy={this.destroyElementSquare}
        />
      </div>
    );
  }
}

export default Container;
