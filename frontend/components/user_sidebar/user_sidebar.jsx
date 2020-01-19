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
        const { currentUser, showUser, numPosts, pageType } = this.props;

        let userInfo;
        let user;
        let greeting;
        if ( (currentUser && showUser && currentUser.id === showUser.id) || pageType === "likes" ) {
            user = currentUser;
            greeting = `Welcome, ${user.username}!`
        } else if ( currentUser && showUser && currentUser.id !== showUser.id ) {
            user = showUser;
            greeting = user.username;
        }

        

        // console.log(currentUser)
        // console.log(showUser)

        if ( user ) {
            userInfo = (
                <div>
                    <h3 className="sidebar-title">{greeting}</h3>
                    <h3 className="sidebar-tl">{user.title}</h3>
                    <h3 className="sidebar-description">{user.description}</h3>
                </div>
            )
        }



        let posts;
        if ( this.props.loaded ) {
            posts = (
                <div className="sidebar-items">
                    <div className="user-sidebar-item">
                        <div>{ pageType === "likes" ? 'Liked Posts' : 'Posts' }</div>
                        <div className="">{numPosts}</div>
                    </div>
                </div>
            )
        }
        
        let followers;
        if ( pageType !== "likes" && this.props.loaded && currentUser.id === user.id ) {
            followers = (
                <div className="sidebar-items">
                    <div className="user-sidebar-item">
                        <div>Followers</div>
                        <div className="">{Math.floor(Math.random() * 3000)}</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="sidebar-box">
                {userInfo}
                {posts}
                {followers}
            </div>
        )
    }


}

export default Sidebar;


