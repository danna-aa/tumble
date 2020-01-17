import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import UserSidebar from '../user_sidebar/user_sidebar';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showUserId: parseInt(this.props.match.params.userId, 10),
            currentUserId: this.props.session.id,
            loaded: false,
            pageType: "likes"
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchPosts('likes')
            .then(
                () => this.props.fetchUsers()
                    .then(
                        () => this.setState({ loaded: true })
                    ) 
            );
        // this.setState({ userId: this.props.match.params.userId })
        // this.props.fetchUser(this.props.session.id);
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // componentDidUpdate(prevProps) {
    //     // debugger;
    //     if ( prevProps.match.params.userId !== this.props.match.params.userId ) {
    //         this.props.fetchPosts(this.props.match.params.userId);
    //             // .then(() => this.setState({userId: this.props.match.params.userId}));
    //     }
    // }

    render() {
        let { posts, users, session, deletePost, likePost, unlikePost, createComment, deleteComment } = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) =>
            a.created_at > b.created_at ? -1 : 1
        );
        let numPosts = postsList.length;

        // map list of dashboard items
        let dashList;
        if (!this.state.loaded) {
            dashList = (
                <div className="dashboard-item last" key="out-of-content">
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="dashboard-background out-of-content">
                        <h2 className="out-of-content-message big">
                            <i className="fas fa-spinner fa-pulse"></i>
                        </h2>
                    </div>
                </div>
            )
        } else {
            dashList = postsList.map(post => (
                <Post
                    key={post.id}
                    id={`post-${post.id}`}
                    post={post}
                    users={users}
                    session={session}
                    deletePost={deletePost}
                    likePost={likePost}
                    unlikePost={unlikePost}
                    createComment={createComment}
                    deleteComment={deleteComment}
                    userId={session.id}
                />
                
            ))
            dashList.push(
                <div className="dashboard-item last" key="out-of-content">
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="dashboard-background out-of-content"><h2 className="out-of-content-message">No more liked posts...</h2></div>
                </div>
            )
        }

        let currentUser = users[session.id];

        let postForm;
        let userSidebar;

        if (this.state.showUserId === this.state.currentUserId) {
            postForm = <PostFormButtons users={users} session={session} />
            userSidebar = (
                <UserSidebar currentUser={currentUser} numPosts={numPosts} />
            );

        }


        return (
            <div className="dash">
                <div className="main">
                    {postForm}
                    {/* <PostFormButtons users={users} session={session} /> */}
                    {dashList}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}>
                        <i className="fas fa-angle-double-up"></i>
                    </div>
                </div>

                <UserSidebar currentUser={currentUser} numPosts={numPosts} pageType={this.state.pageType} loaded={this.state.loaded} />
            </div>
        );
    }


}

export default Likes;
