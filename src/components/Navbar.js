import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logout from '../helpers/logout'

const NavigationBar = () => {
    const user = useSelector(state => state.sessionReducer.user);

    return (

        <nav className="navbar navbar-expand-md" id="navbar-outer">
            <div className="container-fluid" id="navbar-inner">

                <Link to="/" className="navbar-brand" id="warbler-logo-container">
                    <img src="/images/logo.png" alt="Warbler"></img>
                    <span id="warbler"><strong>Warbler</strong></span>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        {
                            // conditional rendering for logged-in users
                            (!!Object.keys(user).length)
                                ? (<ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/" onClick={logout}>Log out</Link></li>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to={`/users/${user._id}/profile`}>Profile</Link></li>
                                </ul>
                                )
                                : (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/signup">Sign Up</Link></li>
                                        <li><Link to="/signin">Sign In</Link></li>
                                    </ul>
                                )
                        }

                    </div>


            </div>
        </nav>

    )
}

export default NavigationBar