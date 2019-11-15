import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        function shuffle(arr) {
            let ctr = arr.length, temp, index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = arr[ctr];
                arr[ctr] = arr[index];
                arr[index] = temp;
            }
            return arr;
        }
        
        const { users } = this.props;
        let recommendedList = shuffle(Object.values(users));

        const sidebarList = recommendedList.map(user => (
            <Link to={`/users/${user.id}`} key={user.id}> 
                <SidebarItem user={user} /> 
            </Link>

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
