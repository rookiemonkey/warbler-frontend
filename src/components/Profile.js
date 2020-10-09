import React from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux'
import MessageFormTimeline from "./MessageForm-Timeline";

const Profile = () => {

    const user = useSelector(state => state.sessionReducer.user);
    const { profilePicture, username, accountCreation, email } = user;

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
                                    <h6 className="mb-0"><strong>@{username}</strong></h6>
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
                        <div className="offset-1 col-sm-10">
                            <MessageFormTimeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile