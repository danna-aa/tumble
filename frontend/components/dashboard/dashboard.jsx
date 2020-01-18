import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import Sidebar from '../sidebar/sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts,
            loaded: false
        }
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchPosts('dashboard')
            .then(
                () => this.props.fetchUsers()
                    .then(
                        () => this.props.fetchFollows()
                            .then(
                                () => this.setState({ loaded: true })
                            )
                    ) 
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

        // console.log(this.props.history)
        let { posts, users, session, deletePost, likePost, unlikePost, createComment, deleteComment } = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => ( a.created_at > b.created_at ) ? -1 : 1 );

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
                    <div className="dashboard-background out-of-content"><h2 className="out-of-content-message">No more content...</h2></div>
                </div>
            )
        }

        let sideBar;
        if (!this.state.loaded) {
            sideBar = (
                <Sidebar users={{}} />
            )
        } else {
            sideBar = (
                <Sidebar users={users} />
            )
        }

        return (

            <div className="dash">
                
                <div className="main">
                    <PostFormButtons users={users} session={session}/>

                    {dashList}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>


                </div>

                {sideBar}

            </div>
        )

    }


}

export default Dashboard;
