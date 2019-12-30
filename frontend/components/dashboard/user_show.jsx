import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import UserSidebar from '../user_sidebar/user_sidebar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.props.fetchPosts(this.props.match.params.userId);
        this.state = { userId: null };

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchPosts(this.props.match.params.userId);
        // this.setState({ userId: this.props.match.params.userId })
        // this.props.fetchUser(this.props.session.id);
        console.log(this.state)
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if ( prevProps.match.params.userId !== this.props.match.params.userId ) {
            this.props.fetchPosts(this.props.match.params.userId);
                // .then(() => this.setState({userId: this.props.match.params.userId}));
        }
    }

    render() {
        let { posts, users, session } = this.props;

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => (a.created_at > b.created_at) ? -1 : 1);
        let numPosts = postsList.length;

        // map list of dashboard items 
        let dashList = (postsList.map(post => {
            return <Post key={post.id} post={post} users={users} session={session} />
        }));

        let currentUser = users[session.id];

        return (
            <div className="dash">
                {/* <PostForm /> */}
                <div className="main">

                    {/* <PostFormButtons users={users} session={session} /> */}
                    {dashList}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>

                    <div className="dashboard-item last">
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                        <div className="dashboard-background out-of-content"><div><h2 className="out-of-content-message">No more posts...</h2></div></div>
                    </div>

                </div>

                <UserSidebar currentUser={currentUser} numPosts={numPosts}/>
            </div>
        )
    }


}

export default Profile;
