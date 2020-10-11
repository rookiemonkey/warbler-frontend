import React from 'react';
import defaultProfileHeader from '../../assets/images/default-profile-header.png';

const ProfileHeader = props => {
    const { profileHeader, profilePicture, username } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <header className="home-hero profile_home"
                        style={{
                            backgroundImage: profileHeader
                                ? profileHeader
                                : defaultProfileHeader
                        }}
                    >
                        <img
                            src={profilePicture}
                            alt={username}
                            className="profile_home_avatar"
                        />
                    </header>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;