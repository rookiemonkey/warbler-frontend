import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import fetchUserMessage from "../helpers/setMessagesUser";
import deleteMessage from '../helpers/deleteMessage';
import MessageForm from "./mini/MessageForm";
import MessageItem from "./mini/MessageItem";
import Loader from './mini/Loader';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const userMessages = useSelector(state => state.messageReducer);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            await dispatch(fetchUserMessage(user._id))
            await setIsLoading(false)
        })()
    }, [user])

    const { profilePicture, username, accountCreation, email } = user;
    const handleDeleteMessage = useCallback(() => dispatch(deleteMessage()), [])

    return (
        <div id="timeline-container" className='row'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <header className="home-hero profile_home">
                            <img
                                src={profilePicture}
                                alt={username}
                                className="profile_home_avatar"
                            />
                        </header>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id="profile-timeline-container">
                    <aside className="col-sm-4 mt-4" id="aside-profile-timeline-outer ">
                        <div className="panel panel-default" id="aside-profile-timeline-middle ">
                            <div id="aside-profile-timeline-inner">
                                <div className="pt-3">
                                    <h2 className="mb-0"><strong>@{username}</strong></h2>
                                    <small>
                                        <em>
                                            Since: <Moment format='Do MMM YYYY' >{accountCreation}</Moment>
                                        </em>
                                    </small>
                                </div>
                                <small>{email}</small>
                            </div>
                        </div>
                    </aside>

                    <div className="row col-sm-8" id="message-list">
                        <div className="col-sm-12">
                            <MessageForm />
                            <ul className="list-group" id="messages">
                                {
                                    !isLoading
                                        ? userMessages.map(m => (
                                            <MessageItem
                                                key={m._id}
                                                date={m.createAt}
                                                text={m.text}
                                                username={m.user.username}
                                                messageID={m._id}
                                                authorID={m.user._id}
                                                profileImageUrl={m.user.profilePicture}
                                                deleteMessage={handleDeleteMessage}
                                            />
                                        ))
                                        : <Loader />
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile