import React from 'react';
import { Link } from 'react-router-dom';

class PostFormButtons extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.post;
    }

    render() {
        const { users, session } = this.props;

        return (
            <div className="dashboard-top-item">

                <div className="avatar">
                    <Link to={`/users/${session.id}`} className="avatar-link">
                        <img className="avatar-image" src={users[session.id].avatar} alt="user_avatar" />
                    </Link>
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