import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addError } from '../store/actions/error';
import resetPassword from '../helpers/resetPassword';

const ResetPassword = props => {
    const { token } = props.match.params;
    const dispatch = useDispatch();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = useCallback(event => {
        const { name, value } = event.target;
        switch (name) {
            case 'newPassword': setNewPassword(value); break;
            case 'confirmPassword': setConfirmPassword(value); break;
            default: alert('Nothing happened');
        }

    }, [])

    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const payload = { newPassword, confirmPassword };
        const response = await resetPassword(payload, token)

        if (!response.result) {
            dispatch(addError(response.message))
        }

        setNewPassword(''); setConfirmPassword('');
    }, [newPassword, confirmPassword])

    return (
        <div className="row justify-content-md-center text-center" id="form-container">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">New Password:</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="form-control"
                        value={newPassword}
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
                    >Reset</button>

                </form>
            </div>
        </div>
    )
}

export default withRouter(ResetPassword);