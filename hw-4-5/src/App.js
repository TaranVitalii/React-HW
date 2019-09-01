import React from "react";
import Store from "./store";
import MainContainer from "./components/MainContainer";
import "./App.css";

function App() {
  return (
    <Store>
      <MainContainer />
    </Store>
  );
}

export default App;
