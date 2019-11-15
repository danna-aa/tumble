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
        const { user } = this.props;
        return (
            <div className="sidebar-box">
                <h3 className="sidebar-title">this.</h3>
                {/* {sidebarList} */}
            </div>
        )
    }


}

export default Sidebar;
