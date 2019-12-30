import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import Sidebar from '../sidebar/sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.posts;
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchPosts('dashboard');
        this.props.fetchUsers();
    }
    
    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        let {posts, users, session, deletePost} = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => ( a.created_at > b.created_at ) ? -1 : 1 );

        // map list of dashboard items 
        let dashList = postsList.map(post => (
            <Post key={post.id} id={`post-${post.id}`} post={post} users={users} session={session} deletePost={deletePost}/>
        ));

        return (

            <div className="dash">
                
                <div className="main">
                    <PostFormButtons users={users} session={session}/>
                    {dashList}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>

                    <div className="dashboard-item last">
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                        <div className="dashboard-background out-of-content"><div><h2 className="out-of-content-message">No more content...</h2></div></div>
                    </div>
                </div>

                <Sidebar users={users} />

            </div>
        )
    }


}

export default Dashboard;
