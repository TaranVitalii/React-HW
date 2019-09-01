import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getUsers } from "../../store/selectors/users";
import { getUsersAxios, getAlbumsAxios } from "../../store/actions/users";

const MenuContainer = Component =>
  class MenuContainer extends React.Component {
    componentDidMount() {
      this.props.getUsersAxios();
      console.log(this.props.getUsersAxios(), "all Users");
    }

    onClickHandler = e => {
      let id = Number(e.target.getAttribute("id"));
      this.props.getAlbumsAxios(id);
    };

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

function mapStateToProps(state) {
  return { users: getUsers(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { getUsersAxios, getAlbumsAxios }
  ),
  MenuContainer
);
