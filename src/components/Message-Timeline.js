import React from 'react';
import Messagelist from './Message-List';
import UserAside from './UserAside';

const MessageTimeline = props => {

    return (
        <div className="row" id="timeline-container">

            <UserAside />

            <Messagelist />

        </div>
    )
}

export default MessageTimeline;