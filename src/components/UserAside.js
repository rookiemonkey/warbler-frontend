import React from 'react'
import setDefaultImage from '../helpers/setDefaultImage';

const UserAside = ({profilePicture, username}) => {

    return (

        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div>
                    <img
                        className="img-thumbnail"
                        src={profilePicture}
                        alt={username}
                        style={{width: "200px", height: "auto"}}
                        onError={setDefaultImage}
                    />
                    <h3>@{ username }</h3>
                </div>
            </div>
        </aside>

    )
}

export default UserAside;