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
        this.props
          .fetchSinglePost(this.props.match.params.postId)
          .then(action =>
            this.setState({ 
                post: action.post,
                loaded: true
            })
          );

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
        let dashList = postsList.map(post => (
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
        ));

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
        if (notesListSorted) {
            notesItems = notesListSorted.map((item, i) => (

                <div className="dashboard-item" key={i}>
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="dashboard-background">
                        <div className="temp">
                            user id: {item.user_id}
                            <br/>
                            time: {item.created_at}
                            <br/>
                            {item.body ? "comment " + item.body : "like"}
                        </div>
                    
                    </div>
                </div>
            ))
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
