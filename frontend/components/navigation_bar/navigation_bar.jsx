import React from 'react';
import { Link } from 'react-router-dom';
import NavButtons from './nav_buttons/nav-buttons';
import SearchBar from './seach_bar/search_bar';
import Devlinks from './devlinks/devlinks';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout, fetchPosts } = this.props;

        return (
            <div className={ "navigation-bar" + ((currentUser) ? " logged-in" : "") }>
                <div className="navigation-bar-flexbox">
                    <Link to='/' className='tumblr-icon'><i className="fab fa-tumblr"></i></Link>
                    <SearchBar currentUser={ currentUser } fetchPosts={fetchPosts}/>
                    <Devlinks />
                    <NavButtons currentUser={ currentUser } logout={ logout }/>
                </div>
            </div>
        )
    }

}

export default NavigationBar;
