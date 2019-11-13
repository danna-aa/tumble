import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="sidebar-box">

                <h3 className="sidebar-title">Recommended Blogs</h3>

                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <div className="sidebar-link-box">
                            <div className="sidebar-link-inner-box">
                                <div className="sidebar-avatar"><img className="sidebar-avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" /></div>
                                <div className="sidebar-item-text">
                                    <div className="sidebar-username">danna</div>
                                    <div className="sidebar-tagline">plz hire me</div>
                                </div>
                            </div>
                            <div className="sidebar-follow-button"><i className="fas fa-plus-square"></i></div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <div className="sidebar-link-box">
                            <div className="sidebar-link-inner-box">
                                <div className="sidebar-avatar"><img className="sidebar-avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" /></div>
                                <div className="sidebar-item-text">
                                    <div className="sidebar-username">boba</div>
                                    <div className="sidebar-tagline">i am a good boy</div>
                                </div>
                            </div>
                            <div className="sidebar-follow-button"><i className="fas fa-plus-square"></i></div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <div className="sidebar-link-box">
                            <div className="sidebar-link-inner-box">
                                <div className="sidebar-avatar"><img className="sidebar-avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" /></div>
                                <div className="sidebar-item-text">
                                    <div className="sidebar-username">mochi</div>
                                    <div className="sidebar-tagline">dog genius</div>
                                </div>
                            </div>
                            <div className="sidebar-follow-button"><i className="fas fa-plus-square"></i></div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <div className="sidebar-link-box">
                            <div className="sidebar-link-inner-box">
                                <div className="sidebar-avatar"><img className="sidebar-avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" /></div>
                                <div className="sidebar-item-text">
                                    <div className="sidebar-username">demo</div>
                                    <div className="sidebar-tagline">this website sucks</div>
                                </div>
                            </div>
                            <div className="sidebar-follow-button"><i className="fas fa-plus-square"></i></div>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }


}

export default Sidebar;
