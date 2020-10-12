import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverPeopleItem = props => {
    const { username, profilePicture, _id } = props;

    return (
        <Link to={`/users/public/${_id}/profile`}>
            <div className="item">
                <img
                    src={profilePicture}
                    style={{ width: '30px', height: '30px' }}
                />
                <h4>{username}</h4>
            </div>
        </Link>
    )
}

export default DiscoverPeopleItem;