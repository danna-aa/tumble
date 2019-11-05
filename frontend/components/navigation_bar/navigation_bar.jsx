import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;
        let navBarRender = <div />


        return (
            <div>
                <Link to='/' className='tumblog-logo'>t</Link>
                <SearchBar currentUser={ currentUser }/>
                {/* search bar */}
                {/* about */}
                <Greeting currentUser={ currentUser } logout={ logout }/>
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
