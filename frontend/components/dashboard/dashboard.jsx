import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        // let posts = Object.values(this.props.state.entities.posts).sort((a, b) => ( a.updated_at > b.updated_at ) ? 1 : -1 );
        let posts = Object.values(this.props.state.entities.posts).sort((a, b) => ( a.id > b.id ) ? -1 : 1 );

        let dashList = (posts.map(post => {
            return (
                <Post post={post} key={post.id}/>
            )
        }));

        return (

            <div className="dash">
                {/* <PostForm />
                <Sidebar/> */}
                {dashList}


                <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>



                <div className="dashboard-item">
                    <div className="avatar">
                        <img className="avatar-image transparent" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" />
                    </div>
                    <div className="dashboard-background out-of-content">
                        <div>
                            <h2 className="out-of-content-message">No more content...</h2>
                        </div>
                    </div>
                </div>





            </div>
        )
    }


}

export default Dashboard;
