import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import UserSidebar from '../user_sidebar/user_sidebar';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId: null,
            post: "",
            loaded: false,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchUsers()
            .then(() => (
                this.props.fetchSinglePost(this.props.match.params.postId)
                    .then(action => (
                        this.setState({
                            post: action.post,
                            loaded: true
                        })
                    ))
            ))
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        let {posts, users, session, deletePost, likePost, unlikePost, createComment, deleteComment} = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => (a.created_at > b.created_at) ? -1 : 1);

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
                    postShow={true}
                />
                
            ))
        }

        let currentUser = users[session.id];

        let notesListSorted = null
        if (this.state.loaded) {
            let likes = this.state.post.likes;
            let comments = this.state.post.comments;
            let notesList = {...likes, ...comments}
            notesListSorted = Object.values(notesList).sort((a, b) =>
              a.created_at < b.created_at ? -1 : 1
            );
        }

        let notesItems;
        // let date = item.created_at
        // let dateFormatted = date.format("mmm dd yyyy HH:MM")

        if ( notesListSorted ) {
            notesItems = notesListSorted.map((item, i) => {
                let content;
                if ( item.body ) {
                    content = (
                        <div className="note-content">
                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${item.user_id}`}> 
                                        {users[item.user_id].username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description">commented</span>
                            </div>
                            <div className="note-comment-body">
                                {/* <i className="fas fa-comment"></i> {" "} */}
                                {/* <i className="fas fa-plus"></i> {" "} */}
                                <i className="fas fa-comment-medical"></i> {" "}
                                {item.body}
                            </div>
                            <div className="note-datetime">
                                {new Date(item.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>
                        </div>
                    )
                } else {
                    content = (
                        <div className="note-content">
                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${item.user_id}`}>
                                        {users[item.user_id].username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description">liked this</span>
                            </div>
                            <div className="note-datetime">
                                {new Date(item.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="note-item" key={i}>
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                        <div className="note-background">
                            {content}
                        </div>
                    </div>
                )
            })
            let post = this.state.post;
            let user = users[post.user_id]
            notesItems.unshift(


                <div className="note-item" key="note-user-posted">
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="note-background">
                        <div className="note-content">
                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${user.id}`}>
                                        {user.username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description"> posted this</span>
                            </div>
                            <div className="note-datetime">
                                {new Date(post.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>
                        </div>
                    </div>
                </div>


            )
        }


        // console.log(this.state)
        



        // let notesList = {}

        return (
            <div className="dash">
                {/* <PostForm /> */}
                <div className="main">

                    {/* <PostFormButtons users={users} session={session} /> */}
                    {dashList}
                    {notesItems}

                    {/* {notesList} */}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>

                    <div className="dashboard-item last">
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                    </div>

                </div>

                {/* <UserSidebar currentUser={currentUser} numPosts={numPosts}/> */}
            </div>
        )
    }


}

export default PostShow;
