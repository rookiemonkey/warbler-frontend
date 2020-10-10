import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateAvatar from '../../helpers/updateAvatar';

const ProfileManageAvatar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const [previewAvatar, setPreviewAvatar] = useState('');
    const [currentAvatar, setCurrentAvatar] = useState([]);

    const handleChange = useCallback(event => {
        const { files } = event.target;
        setCurrentAvatar(files[0])
        setPreviewAvatar(URL.createObjectURL(...files));
    }, [])

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('profilePicture', currentAvatar)
        dispatch(updateAvatar(user._id, formData))
    }, [currentAvatar])

    return (
        <div className="row justify-content-md-center text-center" id="form-container">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <input
                        type="file"
                        accept="image/*"
                        id="profilePicture"
                        name="profilePicture"
                        className="form-control"
                        required={true}
                        onChange={handleChange}
                    ></input>

                    <img
                        alt="profilePicture"
                        style={{ width: '360px', height: '360px' }}
                        src={previewAvatar ? previewAvatar : user.profilePicture}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Update</button>

                </form>
            </div>
        </div>
    )
}

export default ProfileManageAvatar;