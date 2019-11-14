import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        const { users } = this.props;

        const sidebarList = Object.values(users).map(user => (
            <SidebarItem  key={user.id} user={user}/>
        ));

        return (
            <div className="sidebar-box">
                <h3 className="sidebar-title">Recommended Blogs</h3>
                {sidebarList}
            </div>
        )
    }


}

export default Sidebar;
