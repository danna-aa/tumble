import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { fetchUsers, fetchUser } from '../../actions/session_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import UserLikes from './user_likes';

const mapStateToProps = (state, ownProps) => ({
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

    // not used yet
    // updatePost: postId => dispatch(updatePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLikes);
