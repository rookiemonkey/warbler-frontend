import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateGeneral from '../../helpers/updateGeneral';

const ProfileManageGeneral = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const [currentEmail, setCurrentEmail] = useState(user.email);
    const [currentUsername, setCurrentUsername] = useState(user.username);

    const handleChange = useCallback(event => {
        const { name, value } = event.target;
        switch (name) {
            case 'email': setCurrentEmail(value); break;
            case 'username': setCurrentUsername(value); break;
            default: alert('Nothing happened');
        }

    }, [])

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        const payload = { email: currentEmail, username: currentUsername };
        dispatch(updateGeneral(user._id, payload))
    }, [currentEmail, currentUsername])

    return (
        <div className="row justify-content-md-center text-center" id="form-container">
            <div className="col">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={currentEmail}
                        required={true}
                        min="8"
                        autoComplete="off"
                        onChange={handleChange}
                    ></input>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={currentUsername}
                        required={true}
                        autoComplete="off"
                        onChange={handleChange}
                    ></input>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Update</button>

                </form>
            </div>
        </div>
    )
}

export default ProfileManageGeneral;