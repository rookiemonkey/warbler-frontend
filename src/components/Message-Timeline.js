import React from 'react';
import { useSelector } from 'react-redux'
import Messagelist from './Message-List';
import UserAside from './UserAside';

const MessageTimeline = props => {

    const u = useSelector(state => state.sessionReducer.user);
    const { profilePicture, username } = u;

    return (
        <div className="row">

            <UserAside
                profilePicture={profilePicture}
                username={username}
            />

            <Messagelist />

        </div>
    )
}

export default MessageTimeline;