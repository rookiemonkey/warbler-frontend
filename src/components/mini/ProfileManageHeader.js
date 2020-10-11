import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateHeader from '../../helpers/updateHeader';
import defaultProfileHeader from '../../assets/images/default-profile-header.png';

const ProfileManageHeader = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const [previewHeader, setPreviewHeader] = useState('');
    const [currentHeader, setCurrentHeader] = useState([]);

    const handleChange = useCallback(event => {
        const { files } = event.target;
        setCurrentHeader(files[0])
        setPreviewHeader(URL.createObjectURL(...files));
    }, [])

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('profileHeader', currentHeader)
        dispatch(updateHeader(user._id, formData))
    }, [currentHeader])

    return (
        <div className="row justify-content-md-center text-center" id="form-container">
            <div className="col">
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <img
                        alt="profileHeader"
                        style={{ width: '360px', height: 'auto' }}
                        src={previewHeader ? previewHeader : user.profileHeader}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        id="profileHeader"
                        name="profileHeader"
                        className="form-control manageprofile_input"
                        required={true}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary manageprofile_btn"
                    >Update</button>

                </form>
            </div>
        </div>
    )
}

export default ProfileManageHeader;