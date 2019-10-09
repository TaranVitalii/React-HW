import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import useValue from "../hooks/useValue";
import useWindowSize from "../hooks/useWindowSize";
import useRandomColor from "../hooks/useRandomColor";
import "./input.css";

function UrlInput() {
  const { setValue, ...forInput } = useValue();
  const [url, setUrl] = useState("");
  const size = useWindowSize();
  const [color, changeColor] = useRandomColor("white");

  function onSubmitHandler(e) {
    e.preventDefault();
    setUrl(forInput.value);
    setValue("");
  }

  useEffect(() => {
    changeColor();
  }, []);

  const styles = {
    main: {
      backgroundColor: color
    }
  };

  return (
    <div style={styles.main}>
      <div>
        {size.width}px / {size.height}px
      </div>
      <div className="container">
        <div className="value">{forInput.value}</div>
        <form onSubmit={onSubmitHandler}>
          <input className="urlInput" {...forInput} />
          <button>Submit</button>
        </form>
        <Todo url={url} />
      </div>
    </div>
  );
}

export default UrlInput;
