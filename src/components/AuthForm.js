import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            profilePicture: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { authenticate } = this.props
        const authType = this.props.signup ? 'signup' : 'signin'
        authenticate(authType, this.state)
            .then(res => { this.props.history.push('/'); })
            .catch(err => { console.error(err.meessage) })
    }

    render() {
        const { email, username, password, confirmPassword, profilePicture } = this.state
        const { error } = this.props


        return (
            <div className="row justify-content-md-center text-center" id="form-container">
                <div className="col-md-6">
                    <form
                        onSubmit={this.handleSubmit}
                        autoComplete="off"
                        encType="multipart/form-data"
                    >

                        {/* header */}
                        {!this.props.signup && <h2>Welcome Back</h2>}
                        {this.props.signup && <h2>Join Warbler Today</h2>}


                        {/* email field */}
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            required={true}
                            min="8"
                            autoComplete="off"
                            onChange={this.handleChange}
                        ></input>

                        {/* password field */}
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={password}
                            required={true}
                            onChange={this.handleChange}
                        ></input>


                        {/* will only render if signup props is false/not existing */}
                        {!this.props.signup && (
                            <React.Fragment>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Login</button>

                                <small>
                                    <Link to="/password/forgot"
                                    >Forgot Password </Link>
                                </small>
                            </React.Fragment>
                        )}

                        {/* will only render if signup props is true/exisiting */}
                        {this.props.signup && (
                            <div>

                                {/* confirm password field */}
                                <label htmlFor="password">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    value={confirmPassword}
                                    required={true}
                                    onChange={this.handleChange}
                                ></input>


                                {/* email field */}
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    required={true}
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                ></input>

                                {/* profilePicture field */}
                                <label htmlFor="profilePicture">Profile Picture:</label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    className="form-control"
                                    value={profilePicture}
                                    onChange={this.handleChange}
                                ></input>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Sign Up</button>

                            </div>

                        )}

                        {error && <div className="alert alert-danger">{error.message}</div>}

                    </form>
                </div>
            </div>
        )
    }
}

export default AuthForm;