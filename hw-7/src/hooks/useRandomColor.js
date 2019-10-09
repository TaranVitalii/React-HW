import randomColor from "../utils";
import { useState } from "react";

export const useRandomColor = initialColor => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  return [color, changeColor];
};

export default useRandomColor;
