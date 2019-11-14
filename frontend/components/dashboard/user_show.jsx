import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import Sidebar from '../sidebar/sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // this.props.history.push(`/users/${this.props.match.params.userId}`);
        this.state = { userId: null }
    }

    componentDidMount() {
        this.props.fetchOwnPosts(this.props.match.params.userId);
        window.scrollTo(0, 0);
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.match.params.userId !== this.props.match.params.userId ) {
            this.props.fetchOwnPosts(this.props.match.params.userId)
                .then(() => this.setState({userId: this.props.match.params.userId}));
        }
    }

    render() {
        let { posts, users } = this.props;
        console.log(this.props)

        // dashboard sorted in order of newest at the top
        let postsList = Object.values(posts).sort((a, b) => (a.created_at > b.created_at) ? -1 : 1);

        // map list of dashboard items 
        let dashList = (postsList.map(post => {
            return <Post key={post.id} post={post} users={users} />
        }));

        return (
            <div className="dash">
                {/* <PostForm /> */}
                <div className="main">

                    <PostFormButtons />
                    {dashList}

                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>

                    <div className="dashboard-item last">
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                        <div className="dashboard-background out-of-content"><div><h2 className="out-of-content-message">No more content...</h2></div></div>
                    </div>

                </div>

                <Sidebar/>
            </div>
        )
    }


}

export default Dashboard;
