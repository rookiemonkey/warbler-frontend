import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            profilePicture: ''
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
            .catch(err => { console.error(err) })
    }

    render() {
        const { email, username, password, profilePicture } = this.state
        const { error } = this.props


        return (
            <div className="row justify-content-md-center text-center" id="form-container">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit} autocomplete="off">

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
                            autocomplete="off"
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Login</button>
                        )}

                        {/* will only render if signup props is true/exisiting */}
                        {this.props.signup && (
                            <div>

                                {/* email field */}
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    required={true}
                                    autocomplete="off"
                                    onChange={this.handleChange}
                                ></input>

                                {/* profilePicture field */}
                                <label htmlFor="profilePicture">Profile Picture URL:</label>
                                <input
                                    type="text"
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