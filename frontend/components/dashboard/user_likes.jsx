import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostFormButtons from './post_form_buttons';
import UserSidebar from '../user_sidebar/user_sidebar';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        // this.props.fetchPosts(this.props.match.params.userId);
        this.state = { 
            showUserId: parseInt(this.props.match.params.userId, 10),
            currentUserId: this.props.session.id
        };
        // console.log(this.props);
        // console.log(this.state);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props
          .fetchPosts('likes');
          
        // this.setState({ userId: this.props.match.params.userId })
        // this.props.fetchUser(this.props.session.id);
        // console.log('====================================');
        // console.log(this.props);
        // console.log('====================================');
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
               let {
                 posts,
                 users,
                 session,
                 deletePost,
                 likePost,
                 unlikePost
               } = this.props;

               // dashboard sorted in order of newest at the top
               let postsList = Object.values(posts).sort((a, b) =>
                 a.created_at > b.created_at ? -1 : 1
               );
               let numPosts = postsList.length;

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
                   userId={session.id}
                 />
               ));

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

                     <div
                       className="back-to-top icon"
                       onClick={this.handleBackToTop}
                     >
                       <i className="fas fa-angle-double-up"></i>
                     </div>

                     <div className="dashboard-item last">
                       <div className="avatar">
                         <img className="avatar-image"></img>
                       </div>
                       <div className="dashboard-background out-of-content">
                         <div>
                           <h2 className="out-of-content-message">
                             No more posts...
                           </h2>
                         </div>
                       </div>
                     </div>
                   </div>

                   <UserSidebar currentUser={currentUser} numPosts={numPosts} />
                 </div>
               );
             }


}

export default Likes;
