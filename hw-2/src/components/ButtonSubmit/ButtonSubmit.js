import React from "react";

export default props => {
  const submit = e => {
    e.preventDefault();
    props.onSubmit(props.data);
  };
  return (
    <button type="submit" className="SubmitButton" onClick={submit}>
      Submit
    </button>
  );
};
