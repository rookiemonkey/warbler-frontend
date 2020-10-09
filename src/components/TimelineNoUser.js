import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './mini/MessageItem';
import Loader from './mini/Loader';
import fetchMessage from "../helpers/setMessages";

const TimelineNoUser = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReducer)
    const [messagesIsLoading, setMessagesIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            await dispatch(await fetchMessage());
            await setMessagesIsLoading(false);
        })()
    }, [])

    return (
        <React.Fragment>

            <header className="home-hero">
                <h1>What's happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup">
                    <button className="btn btn-primary">Sign up here</button>
                </Link>
            </header>

            <div className="container mt-3 p-0" id="timelinenouser-container">
                <div className="row">
                    <div className="col-sm-7" id="timelinenouser-message-list">
                        <h3>Latest on Warbler</h3>
                        <ul className="list-group" id="timelinenouser-messages">
                            {
                                !messagesIsLoading
                                    ? messages.map(m => (
                                        <MessageItem
                                            key={m._id}
                                            date={m.createAt}
                                            text={m.text}
                                            username={m.user.username}
                                            messageID={m._id}
                                            authorID={m.user._id}
                                            profileImageUrl={m.user.profilePicture}
                                        />
                                    ))
                                    : <Loader />
                            }
                        </ul>
                    </div>

                    <div className="col-sm-5">
                        <h3>Local</h3>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );

};

export default TimelineNoUser;
