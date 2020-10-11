import React from 'react';
import styled from 'styled-components';
import defaultProfileHeader from '../../assets/images/default-profile-header.png';

const Header = styled.header`
        background-Image:  url(${props => props.image});
    `;

const ProfileHeader = props => {
    const { profileHeader, profilePicture, username } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Header
                        className="profile_home"
                        image={
                            profileHeader
                                ? profileHeader
                                : defaultProfileHeader
                        }
                    >
                        <img
                            src={profilePicture}
                            alt={username}
                            className="profile_home_avatar"
                        />
                    </Header>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;