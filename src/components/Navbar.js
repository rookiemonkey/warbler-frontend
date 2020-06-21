import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logout from '../helpers/logout'

const NavigationBar = () => {

    const user = useSelector(state => state.sessionReducer.user);

    return (

        <nav className="navbar navbar-expand" id="navbar-outer">
            <div className="container-fluid" id="navbar-inner">

                <span id="warbler-logo-container">
                    <Link to="/" className="navbar-brand">
                        <img src="/images/logo.png" alt="Warbler"></img>
                        <span id="warbler"><strong>//Warbler</strong></span>
                    </Link>
                </span>

                {
                    // conditional rendering for logged-in users
                    (!!Object.keys(user).length)
                    ? ( <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/" onClick={logout}>Log out</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={`/users/${user.id}/message/new`}>New Post</Link></li>
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
        </nav>

    )
}

export default NavigationBar