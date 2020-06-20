import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-picture.jpg';

const MessageItem = ({ date, img, text, username, deleteMessage, messageID }) => {

    const userID = useSelector(state => state.sessionReducer.user.id)

    return (

        <div>

            <li className="list-group-item">

                <img
                    className="timeline-image"
                    src={img || DefaultImage}
                    alt={username}
                    height='100px'
                    width='100px'
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

                    <a
                        className="btn btn-danger"
                        onClick={() => { deleteMessage(userID, messageID) }}
                    >Delete</a>

                </div>

            </li>

        </div>

    )
}

export default MessageItem;