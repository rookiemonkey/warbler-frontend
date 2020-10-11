import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addError } from '../../store/actions/error';
import updateAuthentication from '../../helpers/updateAuthentication';

const ProfileManageAuthentication = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = useCallback(event => {
        const { name, value } = event.target;
        switch (name) {
            case 'password': setPassword(value); break;
            case 'confirmPassword': setConfirmPassword(value); break;
            default: alert('Nothing happened');
        }

    }, [])

    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const payload = { password, confirmPassword };
        const response = updateAuthentication(user._id, payload);

        if (!response.result) {
            dispatch(addError(response.message))
        }

    }, [password, confirmPassword])

    return (
        <div className="row justify-content-md-center text-center h-100 custom-form-container" id="form-container">
            <div className="col d-flex justify-content-center align-items-center h-100">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">New Password:</label> <br />
                    <small>
                        Passwords should be at least 8 characters in length
                    </small>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={password}
                        required={true}
                        min="8"
                        autoComplete="off"
                        onChange={handleChange}
                    ></input>

                    <label htmlFor="username">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
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

export default ProfileManageAuthentication;