import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { likePost, unlikePost } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/session_actions';
import { fetchFollows } from '../../actions/follow_actions';
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
    updatePost: postId => dispatch(updatePost(postId)),
    likePost: (post, userId) => dispatch(likePost(post, userId)),
    unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
    createComment: (post, userId) => dispatch(createComment(post, userId)),
    deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
    fetchFollows: () => dispatch(fetchFollows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
