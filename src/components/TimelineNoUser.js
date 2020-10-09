import React from "react";
import { Link } from 'react-router-dom';

const TimelineNoUser = props => {

    return (

        <header className="home-hero">
            <h1>What's happening?</h1>
            <h4>New to Warbler?</h4>
            <Link to="/signup">
                <button className="btn btn-primary">Sign up here</button>
            </Link>
        </header>

    );

};

export default TimelineNoUser;
