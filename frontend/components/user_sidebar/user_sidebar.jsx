import React from 'react';
import { Link } from 'react-router-dom';
import UserSidebarItem from './user_sidebar_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const sidebarList = Object.values(users).map(user => (
        //     <UserSidebarItem key={user.id} user={user} />
        // ));
        const { currentUser, numPosts } = this.props;

        return (
            <div className="sidebar-box">
                <h3 className="sidebar-title">Welcome, {currentUser.username}!</h3>
                <h3 className="sidebar-tl">{currentUser.title}</h3>
                <h3 className="sidebar-description">{currentUser.description}</h3>

                <div className="sidebar-items">
                    <div className="user-sidebar-item">
                        <div>Posts</div>
                        <div className="">{numPosts}</div>
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="user-sidebar-item">
                        <div>Followers</div>
                        <div className="">{Math.floor(Math.random() * 3000)}</div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Sidebar;
