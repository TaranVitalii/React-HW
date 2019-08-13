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
    return value ? (
      <Greetings onBack={this.onBack} data={this.state.data} />
    ) : (
      <UserForm formData={this.onSubmit} />
    );
  }
}
App.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string
  })
};
