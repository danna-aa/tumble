import React from 'react';
import { Link } from 'react-router-dom';

class PostFormButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    render() {

        return (
            <div className="dashboard-top-item">

                <div className="avatar">
                    <img className="avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" />
                </div>

                <div className="dashboard-background-buttons">

                    <div className="post-form-buttons">

                        <div className="post-form-button text">
                            <i className="fas fa-font"></i>
                            <div className="post-form-button-label">Text</div>
                        </div>

                        <div className="post-form-button photo">
                            <i className="fas fa-camera"></i>
                            <div className="post-form-button-label">Photo</div>
                        </div>

                        <div className="post-form-button quote">
                            <i className="fas fa-quote-left"></i>
                            <div className="post-form-button-label">Quote</div>
                        </div>

                        <div className="post-form-button link">
                            <i className="fas fa-link"></i>
                            <div className="post-form-button-label">Link</div>
                        </div>

                        <div className="post-form-button chat">
                            <i className="fas fa-comments"></i>
                            <div className="post-form-button-label">Chat</div>
                        </div>

                        <div className="post-form-button audio">
                            <i className="fas fa-headphones"></i>
                            <div className="post-form-button-label">Audio</div>
                        </div>

                        <div className="post-form-button video">
                            <i className="fas fa-video"></i>
                            <div className="post-form-button-label">Video</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PostFormButtons;