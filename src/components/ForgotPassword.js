import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addError } from '../store/actions/error';
import forgotPassword from '../helpers/forgotPassword';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleChange = useCallback(event => setEmail(event.target.value), [])

    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const results = await forgotPassword({ email })

        if (!results.result) {
            return dispatch(addError(results.data))
        }

        setEmail('');
    }, [email])

    return (
        <div className="row justify-content-md-center text-center" id="form-container">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} method="POST">

                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        required={true}
                        autoComplete="off"
                        onChange={handleChange}
                    ></input>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Submit</button>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;