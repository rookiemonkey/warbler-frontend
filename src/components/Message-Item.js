import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import setDefaultImage from '../helpers/setDefaultImage';

const MessageItem = ({ date, profileImageUrl, text, username, deleteMessage, messageID, authorID }) => {

    const userID = useSelector(state => state.sessionReducer.user.id)

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
                                onClick={() => { deleteMessage(userID, messageID) }}
                                >Delete</a>)
                            : null
                    }

                </div>

            </li>

        </div>

    )
}

export default MessageItem;