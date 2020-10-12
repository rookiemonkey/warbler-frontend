import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverPeopleItem = props => {
    const { username, profilePicture, _id } = props;

    return (
        <Link to={`/users/public/${_id}/profile`}>
            <div className="item discover_peopleitem_container">
                <img
                    className="discover_peopleitem_icon"
                    src={profilePicture}
                />
                <small>{username}</small>
            </div>
        </Link>
    )
}

export default DiscoverPeopleItem;