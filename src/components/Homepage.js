import React from "react";
import HeaderNoUser from "./HeaderNoUser";
import MessageTimeline from "./Message-Timeline";

const Homepage = props => {

    if (props.user.isAuthenticated) {

        return <MessageTimeline />;

    } else {

        return <HeaderNoUser />;

    }

};

export default Homepage;
