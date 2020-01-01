import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class PostFormButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { users, session, openModal } = this.props;

        return (
            <div className="dashboard-top-item">

                <div className="avatar">
                    <Link to={`/users/${session.id}`} className="avatar-link">
                        <img className="avatar-image" src={users[session.id].avatar} alt="user_avatar" />
                    </Link>
                </div>

                <div className="dashboard-background-buttons">

                    <div className="post-form-buttons">

                        <div className="post-form-button text" onClick={() => dispatch(openModal('text'))}>
                            <i className="fas fa-font"></i>
                            <div className="post-form-button-label">Text</div>
                        </div>

                        <div className="post-form-button photo" onClick={() => dispatch(openModal('photo'))}>
                            <i className="fas fa-camera"></i>
                            <div className="post-form-button-label">Photo</div>
                        </div>

                        <div className="post-form-button quote" onClick={() => dispatch(openModal('quote'))}>
                            <i className="fas fa-quote-left"></i>
                            <div className="post-form-button-label">Quote</div>
                        </div>

                        <div className="post-form-button link" onClick={() => dispatch(openModal('link'))}>
                            <i className="fas fa-link"></i>
                            <div className="post-form-button-label">Link</div>
                        </div>

                        <div className="post-form-button chat" onClick={() => dispatch(openModal('chat'))}>
                            <i className="fas fa-comments"></i>
                            <div className="post-form-button-label">Chat</div>
                        </div>

                        <div className="post-form-button audio" onClick={() => dispatch(openModal('audio'))}>
                            <i className="fas fa-headphones"></i>
                            <div className="post-form-button-label">Audio</div>
                        </div>

                        <div className="post-form-button video" onClick={() => dispatch(openModal('video'))}>
                            <i className="fas fa-video"></i>
                            <div className="post-form-button-label">Video</div>
                        </div>

                    </div>
                </div>
            </div>
        )
        

    }
}

const mapStateToProps = ({ session }) => ({
    currentUser_id: session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormButtons);






































// class PostBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { formVisible: false, form: null };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.setState({ formVisible: true, form: e.target });
//     }

//     render() {
//         if (this.state.formVisible || !this.props.session.currentUser) {
//             return this.state.form;
//         } else {
//             return (
//                 <div className="bar-container">
//                     <div className={'current-user-avatar'}>
//                         <img src={this.props.session.currentUser.avatar_url} />
//                     </div>
//                     <div className="bar">
//                         <TextPostForm onClick={this.handleSubmit} hidden={true} />
//                         <PhotoPostForm onClick={this.handleSubmit} hidden={true} />
//                         <QuotePostForm onClick={this.handleSubmit} hidden={true} />
//                         <LinkPostForm onClick={this.handleSubmit} hidden={true} />
//                         <ChatPostForm onClick={this.handleSubmit} hidden={true} />
//                         <AudioPostForm onClick={this.handleSubmit} hidden={true} />
//                         <VideoPostForm onClick={this.handleSubmit} hidden={true} />
//                     </div>
//                 </div>
//             );
//         }
//     }
// }
// export default PostBar;







































// import React from 'react';
// import { Link } from 'react-router-dom';

// class PostFormButtons extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = this.props.post;
//     }

//     render() {
//         const { users, session } = this.props;

//         return (
//             <div className="dashboard-top-item">

//                 <div className="avatar">
//                     <Link to={`/users/${session.id}`} className="avatar-link">
//                         <img className="avatar-image" src={users[session.id].avatar} alt="user_avatar" />
//                     </Link>
//                 </div>

//                 <div className="dashboard-background-buttons">

//                     <div className="post-form-buttons">

//                         <div className="post-form-button text">
//                             <i className="fas fa-font"></i>
//                             <div className="post-form-button-label">Text</div>
//                         </div>

//                         <div className="post-form-button photo">
//                             <i className="fas fa-camera"></i>
//                             <div className="post-form-button-label">Photo</div>
//                         </div>

//                         <div className="post-form-button quote">
//                             <i className="fas fa-quote-left"></i>
//                             <div className="post-form-button-label">Quote</div>
//                         </div>

//                         <div className="post-form-button link">
//                             <i className="fas fa-link"></i>
//                             <div className="post-form-button-label">Link</div>
//                         </div>

//                         <div className="post-form-button chat">
//                             <i className="fas fa-comments"></i>
//                             <div className="post-form-button-label">Chat</div>
//                         </div>

//                         <div className="post-form-button audio">
//                             <i className="fas fa-headphones"></i>
//                             <div className="post-form-button-label">Audio</div>
//                         </div>

//                         <div className="post-form-button video">
//                             <i className="fas fa-video"></i>
//                             <div className="post-form-button-label">Video</div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default PostFormButtons;