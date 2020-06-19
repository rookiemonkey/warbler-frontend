import React from 'react'
import DefaultImage from '../images/default-profile-picture.jpg';

const UserAside = ({profilePicture, username}) => {

    return (

        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div>
                    <img
                        className="img-thumbnail"
                        src={profilePicture || DefaultImage}
                        alt={username}
                        style={{width: "200px", height: "auto"}}
                    />
                </div>
            </div>
        </aside>

    )
}

export default UserAside;