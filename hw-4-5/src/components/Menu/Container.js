import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getUsersFromState } from "../../store/selectors/users";
import { getUsers } from "../../store/actions/user";

const MenuContainer = Component =>
  class MenuContainer extends React.Component {
    componentDidMount() {
      this.props.getUsers();
    }

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

function mapStateToProps(state) {
  return { users: getUsersFromState(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { getUsers }
  ),
  MenuContainer
);
