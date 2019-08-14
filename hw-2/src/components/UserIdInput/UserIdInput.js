import React from "react";

export default props => {
  const onChange = e => {
    e.preventDefault();
    props.onChange(e.target.value);
  };
  return (
    <input
      type="text"
      name="UserId"
      placeholder="User id"
      onChange={onChange}
    />
  );
};
