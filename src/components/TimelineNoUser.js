import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './mini/MessageItem';
import Loader from './mini/Loader';
import fetchMessage from "../helpers/setMessages";
import fetchCategoricalNews from "../helpers/setNewsCategories";
import fetchGlobalNews from "../helpers/setNewsGlobal";
import fetchLocalNews from "../helpers/setNewsLocal";

const TimelineNoUser = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReducer)
    const [messagesIsLoading, setMessagesIsLoading] = useState(true);
    const [globalNewsIsLoading, setGlobalNewsIsLoading] = useState(true);
    const [localNewsIsLoading, setLocalNewsIsLoading] = useState(true);
    const [categoricalNewsIsLoading, setCategoricalNewsIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const isThereLocal = localStorage.getItem('localNews');
            const isThereGlobal = localStorage.getItem('globalNews');
            const isThereCategorical = localStorage.getItem('categoricalNews');

            await dispatch(await fetchMessage());
            await setMessagesIsLoading(false);

            console.log('isThereLocal', isThereLocal)
            console.log('isThereGlobal', isThereGlobal)
            console.log('isThereCategorical', isThereCategorical)

            if (!isThereGlobal) {
                await dispatch(await fetchGlobalNews());
                await setGlobalNewsIsLoading(false);
            } else { await setGlobalNewsIsLoading(false); }

            if (!isThereLocal) {
                await dispatch(await fetchLocalNews());
                await setLocalNewsIsLoading(false);
            } else { await setLocalNewsIsLoading(false); }

            if (!isThereCategorical) {
                await dispatch(await fetchCategoricalNews());
                await setCategoricalNewsIsLoading(false);
            } else { await setCategoricalNewsIsLoading(false); }

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
