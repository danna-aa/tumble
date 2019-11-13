import { connect } from 'react-redux';
import { fetchPosts, fetchAllPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import Explore from './explore';

const mapStateToProps = state => ({
    posts: state.entities.posts,
    users: state.entities.users,
    errors: state.errors,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),

    // not used yet
    fetchPost: postId => dispatch(fetchPost(postId)),
    createPost: postId => dispatch(createPost(postId)),
    updatePost: postId => dispatch(updatePost(postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
