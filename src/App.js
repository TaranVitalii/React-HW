import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import UserForm from "./components/UserForm";
import Greetings from "./components/Greetings";

export default class App extends React.Component {
  state = {
    intialState: "UserForm"
  };

  onSubmit = data => {
    this.setState({ intialState: "Greetings" });
    this.data = data;
  };
  onBack = () => {
    this.setState({ intialState: "UserForm" });
  };

  render() {
    let value = this.state.intialState;
    let StateComponent;

    switch (value) {
      case "UserForm":
        StateComponent = <UserForm formData={this.onSubmit} />;
        break;
      case "Greetings":
        StateComponent = <Greetings onBack={this.onBack} data={this.data} />;
        break;
      default:
        StateComponent = <UserForm formData={this.onSubmit} />;
        break;
    }

    return <div>{StateComponent}</div>;
  }
}
App.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
  data: PropTypes.object
};
