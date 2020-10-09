import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import deleteMessage from '../../helpers/deleteMessage';
import setDefaultImage from '../../helpers/setDefaultImage';

const MessageItem = props => {
    const dispatch = useDispatch();
    const { date, profileImageUrl, text, username, messageID, authorID } = props;
    const userID = useSelector(state => state.sessionReducer.user._id)

    const handleDelete = useCallback(() =>
        dispatch(deleteMessage(userID, messageID))
    )

    return (

        <div id="message-item-container">

            <li className="list-group-item" id="message-item">

                <img
                    className="timeline-image"
                    src={profileImageUrl}
                    alt={username}
                    height='100px'
                    width='100px'
                    onError={setDefaultImage}
                />

                <div className="message-area">

                    <Link to="/">@{username} &nbsp;</Link>

                    <span className="text-muted">
                        <Moment
                            className="text-muted"
                            format='Do MMM YYYY'
                        >{date}</Moment>
                    </span>

                    <p>{text}</p>

                    {
                        (authorID == userID)
                            ? (<a
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >Delete</a>)
                            : null
                    }

                </div>

            </li>

        </div>

    )
}

export default MessageItem;