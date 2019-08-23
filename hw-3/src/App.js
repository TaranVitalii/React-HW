import React from "react";
import FigureContaineSquare from "./components/Figure/Square/FigureContainer";
import FigureContainerCircle from "./components/Figure/Circle/FigureContainer";
import FigureContainerTriangle from "./components/Figure/Triangle/FigureContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FigureContaineSquare />
      <FigureContainerCircle />
      <FigureContainerTriangle />
    </div>
  );
}

export default App;
