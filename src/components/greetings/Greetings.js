import React from "react";
import GreetingsLabel from "./GreetingsLabel";
import BackButton from "./greetingsBackButton";

export default props => {
  console.log(props);
  return (
    <div>
      <BackButton onPress={props.onBack} />
      <GreetingsLabel dateAndName={props.data} />
    </div>
  );
};
