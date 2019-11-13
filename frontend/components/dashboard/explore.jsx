import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.posts;
    }

    componentDidMount() {
        this.props.fetchAllPosts();
        
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        let { posts, users, session } = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1);

        // map list of dashboard items 
        let dashList = (postsList.map(post => {
            return <Post key={post.id} post={post} users={users} />
        }));

        return (

            <div className="dash">
                {/* <PostForm />
                <Sidebar/> */}
                {dashList}

                <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>

                <div className="dashboard-item last">
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="dashboard-background out-of-content"><div><h2 className="out-of-content-message">No more content...</h2></div></div>
                </div>

            </div>
        )
    }


}

export default Explore;
