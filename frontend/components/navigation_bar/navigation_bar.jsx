import React from 'react';
import { Link } from 'react-router-dom';
import NavButtons from '../nav_buttons/nav-buttons';
import SearchBar from '../seach_bar/search_bar';
import Devlinks from '../devlinks/devlinks';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;
        let navBarRender = <div />


        return (
            <div className="navigation-bar">
                <Link to='/' className='tumblog-logo'><i className="fab fa-tumblr"></i></Link>
                <SearchBar currentUser={ currentUser }/>
                <Devlinks />
                {/* search bar */}
                {/* about */}
                <NavButtons currentUser={ currentUser } logout={ logout }/>
                {/* {navBarRender} */}
            </div>
        )
    }

}

// const NavigationBar = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <Link to="/signup">Sign up</Link>
//             <Link to="/login">Login</Link>
//         </nav>
//     );

//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.username}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// };

export default NavigationBar;
