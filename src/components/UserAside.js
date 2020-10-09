import React from 'react'
import { useSelector } from 'react-redux'
import Moment from 'react-moment';
import setDefaultImage from '../helpers/setDefaultImage';

const UserAside = () => {

    const user = useSelector(state => state.sessionReducer.user);
    const { profilePicture, username, accountCreation, email } = user;

    return (

        <aside className="col-sm-3" id="aside-timeline-outer">
            <div className="panel panel-default" id="aside-timeline-middle">
                <div id="aside-timeline-inner">
                    <img
                        className="img-thumbnail mb-2"
                        src={profilePicture}
                        alt={username}
                        style={{ width: "95%", height: "auto" }}
                        onError={setDefaultImage}
                    />
                    <h3><strong>@{username}</strong></h3>
                    <h6><em>Since: <Moment format='Do MMM YYYY' >{accountCreation}</Moment> </em></h6>
                    <ul>
                        <li>{email}</li>
                    </ul>
                </div>
            </div>
        </aside>

    )
}

export default UserAside;