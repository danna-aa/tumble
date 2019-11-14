import React from 'react';
import { Link } from 'react-router-dom';

class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props;
    }

    render() {
        const { user } = this.props;
        return (
            <div className="sidebar-items">
                <div className="sidebar-item">
                    <div className="sidebar-link-box">
                        <div className="sidebar-link-inner-box">
                            <div className="sidebar-avatar"><img className="sidebar-avatar-image" src={user.avatar} alt="sidebar-avatar" /></div>
                            <div className="sidebar-item-text">
                                <div className="sidebar-username">{user.username}</div>
                                <div className="sidebar-tagline">{user.title}</div>
                            </div>
                        </div>
                        <div className="sidebar-follow-button"><i className="fas fa-plus-square"></i></div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SidebarItem;

{/* <Link to={`/users/${this.props.post.user_id}`} className="user-link">{post.username}</Link> */}