import React, { Component } from "react";
import { connect } from "react-redux";
import LogIn from "../components/LogIn";
import * as actionTypes from "../store/actions";
// import { useDispatch } from "react-redux";

class Logins extends Component {
  render() {
    return (
      <div>
        {/* <LogIn signedIn={this.props.onSignedIn} /> */}
        <button onClick={this.onSignedIn}>Sign In</button>
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
