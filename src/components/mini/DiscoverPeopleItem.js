import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverPeopleItem = props => {
    const { username, profilePicture, _id } = props;

    return (
        <Link
            to={`/users/public/${_id}/profile`}
            className="discover_peopleitem_link"
        >
            <div className="item discover_peopleitem_container">
                <img
                    className="discover_peopleitem_icon"
                    src={profilePicture}
                />
                <small
                    className="discover_peopleitem_username"
                >@{username}</small>
            </div>
        </Link>
    )
}

export default DiscoverPeopleItem;