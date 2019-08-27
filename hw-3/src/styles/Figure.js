const square = {
  width: "60px",
  height: "60px",
  background: "blue",
  margin: "10px"
};

const circle = {
  width: "120px",
  height: "120px",
  borderRadius: "60px",
  background: "green",
  margin: "10px"
};

const triangle = {
  width: 0,
  height: 0,
  borderBottom: "100px solid red",
  borderLeft: "50px solid transparent",
  borderRight: "50px solid transparent",
  margin: "10px"
};

const styleButtonLight = {
  width: "150px",
  height: "100px",
  color: "black",
  textDecoration: "none",
  userSelect: "none",
  background: "silver",
  padding: "0.7em 1.5em",
  outline: "none"
};

const styleButtonDark = {
  width: "150px",
  height: "100px",
  color: "silver",
  textDecoration: "none",
  userSelect: "none",
  background: "black",
  padding: "0.7em 1.5em",
  outline: "none"
};

const styleBackgroundLight = {
  backgroundColor: "#dae2f0"
};

const styleBackgroundDark = {
  backgroundColor: "#333331"
};

export default {
  square,
  circle,
  triangle,
  styleButtonLight,
  styleButtonDark,
  styleBackgroundLight,
  styleBackgroundDark
};
