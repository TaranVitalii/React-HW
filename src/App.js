import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import UserForm from "./components/UserForm";
import Greetings from "./components/Greetings";

export default class App extends React.Component {
  state = {
    showGreetings: false,
    data: {}
  };

  onSubmit = dataFromForm => {
    this.setState({ showGreetings: true, data: dataFromForm });
  };
  onBack = () => {
    this.setState({ showGreetings: false });
  };

  render() {
    let value = this.state.showGreetings;
    let StateComponent;

    if (value) {
      StateComponent = (
        <Greetings onBack={this.onBack} data={this.state.data} />
      );
    } else {
      StateComponent = <UserForm formData={this.onSubmit} />;
    }

    return <div>{StateComponent}</div>;
  }
}
App.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
  data: PropTypes.object
};
