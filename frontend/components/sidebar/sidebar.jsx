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
        
        const { users, follow, unfollow } = this.props;
        // let recommendedList = shuffle(Object.values(users));
        let recommendedList = Object.values(users);

        let sidebarList = recommendedList.map(user => {

            // this will work once follows is pulled through search
            if (!this.props.follows[user.id] && user.id !== this.props.session.id && this.props.loaded) {
                return (
                    <Link to={`/users/${user.id}`} key={user.id}> 
                        <SidebarItem user={user} follow={follow} unfollow={unfollow}/> 
                    </Link>
                )
            }
            // return (
            //     <Link to={`/users/${user.id}`} key={user.id}> 
            //         <SidebarItem user={user} /> 
            //     </Link>
            // )

        });

        return (
            <div className="sidebar-box">
                <h3 className="sidebar-title">Recommended Blogs</h3>
                {sidebarList}
            </div>
        )
    }


}

export default Sidebar;
