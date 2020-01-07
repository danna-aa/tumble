import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';

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
          <li>
            <Link to="/dashboard" className="icon" title="Dashboard">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/explore" className="icon" title="Explore">
              <i className="far fa-compass"></i>
            </Link>
          </li>
          <li>
            <Link to="/likes" className="icon" title="Likes">
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          {/* <li>
            <Link to="/" className="icon" title="Inbox">
              <i className="far fa-envelope"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="icon" title="Messaging">
              <i className="fas fa-comment-dots"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="icon" title="Activity">
              <i className="fas fa-bolt"></i>
            </Link>
          </li> */}
          <li>
            <Link
              to={`/users/${currentUser.id}`}
              className="icon"
              title="Account"
            >
              <i className="fas fa-user"></i>
            </Link>
          </li>

          {/* nav bar post button */}
          <li>
            <button
              className="nav-bar-post"
              title="Make a post"
              onClick={() => dispatch(openModal("text"))}
            >
              <i className="fas fa-pen"></i>
            </button>
          </li>

          {/* nav bar logout button  */}
          <li
            className="nav-bar-logout-button"
            onClick={logout}
            title="Log out"
          >
            <i className="fas fa-times-circle icon"></i>
          </li>
        </ul>
      </div>
    );

    return currentUser ? loggedInButtons() : sessionLinks();
};


export default NavButtons;
