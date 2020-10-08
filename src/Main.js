import React from "react";
import { connect, useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import AuthForm from "./components/AuthForm";
import MessageForm from './components/MessageForm.js';
import isLoggedIn from "./middleware/isLoggedIn";
import wasLoggedIn from "./middleware/wasLoggedIn";
import authenticate from "./helpers/authenticate";
import flashError from "./helpers/flashError";
import setSession from './store/actions/session';

const Main = props => {
    const { authenticate } = props;
    const dispatch = useDispatch();
    let deleteError;

    // removes the error after a few minutes
    if(props.error != null) {flashError(deleteError, dispatch, 2500)}

    // check local storage if the user was logged in and accidentally refresh the page
    if(props.user.isAuthenticated === false && localStorage.getItem("token") !== null) {
        const t = localStorage.getItem("token")
        const u = wasLoggedIn(t);
        dispatch(setSession(u));
    }


    return (
        <div className="container">
            <Switch>

                {/* HOME PAGE */}
                <Route
                    exact
                    path="/"
                    render={() => <Homepage {...props}></Homepage>}
                ></Route>

                {/* SIGN IN */}
                <Route
                    exact
                    path="/signin"
                    render={() => (
                        <AuthForm
                            {...props}
                            authenticate={authenticate}
                        ></AuthForm>
                    )}
                ></Route>

                {/* SIGN UP */}
                <Route
                    exact
                    path="/signup"
                    render={() => (
                        <AuthForm
                            {...props}
                            authenticate={authenticate}
                            signup
                        ></AuthForm>
                    )}
                ></Route>

                {/* POST MESSAGE */}
                <Route
                    path="/users/:id/message/new"
                    component={isLoggedIn(MessageForm)}
                ></Route>

            </Switch>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.sessionReducer,
        error: state.errorReducer.error,
    };
};

export default withRouter(connect(mapStateToProps, { authenticate })(Main));
