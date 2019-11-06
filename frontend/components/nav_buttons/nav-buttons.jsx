import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="nav-bar-login-signup-button">
            <ul>
                <li>

            <Link to="/signup" className="button">
                <span className="button-word">
                    Sign up 
                </span>
                </Link>
                </li>
                <li>
            <Link to="/login" className="button">
                <span className="button-word">
                    Log in
                </span>
            </Link>

                </li>
            </ul>
        </nav>
    );

    const loggedInButtons = () => (
        <hgroup className="logged-in-nav-bar-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}

            {/* 6 nav bar links when logged in, MODIFY edit links later */}
            <ul className="nav-bar-icon-links">
                <li><Link to='/' className="icon"><i className="far fa-compass"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-home"></i></Link></li>
                <li><Link to='/' className="icon"><i className="far fa-envelope"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-comment-dots"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-bolt"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-user"></i></Link></li>

                <li>
                    <div>
                        <span className="button-word">
                            <button className="nav-bar-post"><i className="fas fa-pen-square"></i></button>
                        </span> 
                        
                    </div>
                </li>

                <li>
                    <div>
                        <button className="nav-bar-logout-button" onClick={logout}>
                            <span className="button-word">
                                Log out
                            </span> 
                        </button>
                    </div>
                </li>
            </ul>

            {/* post button */}


        </hgroup>
    );

    return currentUser ? loggedInButtons() : sessionLinks();
};


export default NavButtons;
