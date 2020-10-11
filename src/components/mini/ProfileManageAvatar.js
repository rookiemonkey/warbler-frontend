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
        <div className="row justify-content-md-center text-center h-100 custom-form-container" id="form-container">
            <div className="col d-flex justify-content-center align-items-center h-100">
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <h3>
                        Avatar
                    </h3>

                    <img
                        alt="profilePicture"
                        style={{ width: '360px', height: 'auto' }}
                        src={previewAvatar ? previewAvatar : user.profilePicture}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        id="profilePicture"
                        name="profilePicture"
                        className="form-control manageprofile_input"
                        required={true}
                        onChange={handleChange}
                    ></input>

                    <button
                        type="submit"
                        className="btn btn-primary manageprofile_btn"
                    >Update</button>

                </form>
            </div>
        </div>
    )
}

export default ProfileManageAvatar;