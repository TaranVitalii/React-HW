import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getLike } from "../../store/selectors/users";
import { postLikesAxios } from "../../store/actions/users";

const LikesContainer = Component =>
  class LikesContainer extends React.Component {
    onClickHandler = e => {
      // let idPhoto = Number(e.target.closest(".photo").id); // поиск ид фото
      this.props.postLikesAxios(this.props.like);
    };

    render() {
      return <Component {...this.props} onClickHandler={this.onClickHandler} />;
    }
  };

function mapStateToProps(state) {
  return { like: getLike(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { postLikesAxios }
  ),
  LikesContainer
);
