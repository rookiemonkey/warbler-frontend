import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { addError } from '../store/actions/error';
import fetchProfileMessages from '../helpers/fetchProfileMessages';
import fetchProfileInformations from '../helpers/fetchProfileInformations';
import MessageItem from "./mini/MessageItem";
import ProfileHeader from './mini/ProfileHeader';
import Loader from './mini/Loader';

const ProfileNoUser = props => {
    const dispatch = useDispatch();
    const { id } = props.match.params;
    const [userProfile, setUserProfile] = useState({});
    const [userMessages, setUserMessages] = useState([]);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [isMessagesLoading, setIsMessagesLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const infos = await fetchProfileInformations(id);
            if (!infos.result) { dispatch(addError(infos.data)) }
            else { setUserProfile(infos.data) }
            await setIsProfileLoading(false);

            const messages = await fetchProfileMessages(id);
            if (!messages.result) { dispatch(addError(messages.data)) }
            else { setUserMessages(messages.data) }
            await setIsMessagesLoading(false);
        })()
    }, [])

    if (isProfileLoading) {
        return <Loader />
    }

    else {

        const { profilePicture, username, accountCreation,
            profileHeader, email, bio
        } = userProfile;

        return (
            <div id="timeline-container" className='row'>

                <ProfileHeader
                    profileHeader={profileHeader}
                    profilePicture={profilePicture}
                    username={username}
                />

                <div className="container">
                    <div className="row" id="profile-timeline-container">
                        <aside className="col-sm-12 col-md-4 mt-4" id="aside-profile-timeline-outer ">
                            <div className="panel panel-default" id="aside-profile-timeline-middle ">
                                <div id="aside-profile-timeline-inner">
                                    <div className="pt-3">
                                        <h3 className="mb-0"><strong>@{username}</strong></h3>
                                        <small>
                                            <em>
                                                Since: <Moment format='Do MMM YYYY' >{accountCreation}</Moment>
                                            </em>
                                        </small>
                                    </div>

                                    <small>{email}</small>

                                    <p></p>

                                    <p style={{ textAlign: "justify" }}>
                                        {bio}
                                    </p>

                                </div>
                            </div>
                        </aside>

                        <div className="col-sm-12 col-md-8" id="message-list">
                            <div className="col-sm-12" style={{ paddingLeft: '0px' }}>
                                <ul className="list-group" id="messages">
                                    {
                                        !isMessagesLoading
                                            ? userMessages.map(m => (
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileNoUser)