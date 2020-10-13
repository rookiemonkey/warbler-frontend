import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import fetchUserMessage from "../helpers/setMessagesUser";
import AddBioModal from "./mini/ProfileAddBioModal";
import ProfileHeader from './mini/ProfileHeader';
import MessageForm from "./mini/MessageForm";
import MessageItem from "./mini/MessageItem";
import Loader from './mini/Loader';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const { messages, skip } = useSelector(state => state.userMessagesReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddBio, setShowAddBio] = useState(false);

    useEffect(() => {
        (async function () {
            await dispatch(fetchUserMessage(user._id, skip))
            await setIsLoading(false)
        })()
    }, [user])

    const { profilePicture, username, accountCreation,
        profileHeader, email, bio
    } = user;

    const handleOpenAddBioModal = useCallback(() => setShowAddBio(true), [])
    const handleCloseAddBioModal = useCallback(() => setShowAddBio(false), [])

    const handleLoadMore = useCallback(() => {
        dispatch(fetchUserMessage(user._id, skip + 20));
        setIsLoading(false);
    }, [skip])

    return (
        <div id="timeline-container" className='row'>

            <ProfileHeader
                profileHeader={profileHeader}
                profilePicture={profilePicture}
                username={username}
            />

            <div className="container">
                <div className="row" id="profile-timeline-container">
                    <aside className="col-sm-4 mt-4" id="aside-profile-timeline-outer ">
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

                                {
                                    bio
                                        ? <React.Fragment>
                                            <p style={{ textAlign: "justify" }}>
                                                {bio}
                                            </p>

                                            <small
                                                style={{ cursor: 'pointer' }}
                                                onClick={handleOpenAddBioModal}
                                            >Update Bio</small> <br />

                                            <small>
                                                <Link
                                                    className="manage_account_btn"
                                                    to={`/users/${user._id}/profile/manage`}
                                                >Manage Account</Link>
                                            </small>

                                            <AddBioModal
                                                handleCloseModal={handleCloseAddBioModal}
                                                show={showAddBio}
                                                bio={bio}
                                            />
                                        </React.Fragment>

                                        : <React.Fragment>
                                            <small
                                                style={{ cursor: 'pointer' }}
                                                onClick={handleOpenAddBioModal}
                                            >Add Bio</small> <br />

                                            <small>
                                                <Link
                                                    className="manage_account_btn"
                                                    to={`/users/${user._id}/profile/manage`}
                                                >Manage Account</Link>
                                            </small>

                                            <AddBioModal
                                                handleCloseModal={handleCloseAddBioModal}
                                                show={showAddBio}
                                            />
                                        </React.Fragment>
                                }

                            </div>
                        </div>
                    </aside>

                    <div className="row col-sm-8" id="message-list">
                        <div className="col-sm-12">
                            <MessageForm />
                            <ul className="list-group" id="messages">
                                {
                                    !isLoading
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

                                {
                                    !isLoading
                                        ? <button
                                            className="btn btn-primary btn_loadmore"
                                            onClick={handleLoadMore}
                                        >Load More</button>
                                        : null
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