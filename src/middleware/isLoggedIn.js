import React, { Component } from "react";
import { connect } from "react-redux";

function isLoggedIn(ComponentToBeRendered) {

  class Authenticate extends Component {

    componentDidMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    }

    render() {
      return <ComponentToBeRendered {...this.props} />;
    }

  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.sessionReducer.isAuthenticated };
  }

  return connect(mapStateToProps)(Authenticate);

}

export default isLoggedIn;