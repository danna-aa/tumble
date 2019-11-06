import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="nav-bar-login-signup-button">
            <ul>
                <li className="signup-button">
                    <Link to="/" className="button" style={{ textDecoration: 'none' }}>
                        <div>
                            Sign up
                        </div>
                    </Link>
                </li>
                <li className="login-button">
                    <Link to="/login" className="button" style={{ textDecoration: 'none' }}>
                        <div>
                            Log in
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );

    const loggedInButtons = () => (
        <div className="logged-in-nav-bar-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}

            {/* 6 nav bar links when logged in, MODIFY edit links later */}
            <ul className="nav-bar-icon-links">
                <li><Link to='/' className="icon"><i className="far fa-compass"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-home"></i></Link></li>
                <li><Link to='/' className="icon"><i className="far fa-envelope"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-comment-dots"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-bolt"></i></Link></li>
                <li><Link to='/' className="icon"><i className="fas fa-user"></i></Link></li>

                {/* nav bar post button */}
                <li>
                    <button className="nav-bar-post">
                        <i className="fas fa-pen-square"></i>
                    </button>
        
                </li>

                {/* nav bar logout button  */}
                <li>
                    <button className="nav-bar-logout-button" onClick={logout}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </li>
            </ul>

        </div>
    );

    return currentUser ? loggedInButtons() : sessionLinks();
};


export default NavButtons;
