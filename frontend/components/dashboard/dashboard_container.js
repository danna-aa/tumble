import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { likePost, unlikePost } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
    posts: state.entities.posts,
    users: state.entities.users,
    errors: state.errors,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
    fetchUsers: () => dispatch(fetchUsers()),
    deletePost: postId => dispatch(deletePost(postId)),
    likePost: (post, userId) => dispatch(likePost(post, userId)),
    unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
    updatePost: postId => dispatch(updatePost(postId)),
    
    // not used yet
    // fetchPost: postId => dispatch(fetchPost(postId)),
    // createPost: postId => dispatch(createPost(postId)),
    // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
