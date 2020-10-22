import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import * as actionTypes from "../store/actions";
import { useDispatch } from "react-redux";

class Logins extends Component {
  render() {
    return (
      <div>
        <Login signedIn={this.props.onSignedIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sig: state.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignedIn: () => dispatch({ type: actionTypes.SIGN_IN }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logins);
