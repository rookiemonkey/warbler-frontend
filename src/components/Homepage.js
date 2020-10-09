import React from "react";
import TimelineNoUser from "./TimelineNoUser";
import Timeline from "./Timeline";

const Homepage = props => {

    if (props.user.isAuthenticated) {

        return <Timeline />;

    } else {

        return <TimelineNoUser />;

    }

};

export default Homepage;
