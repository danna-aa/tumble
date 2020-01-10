import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { fetchUsers, fetchUser } from '../../actions/session_actions';
import { likePost, unlikePost } from "../../actions/like_actions";
import { createComment, deleteComment } from "../../actions/comment_actions";
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    posts: state.entities.posts,
    users: state.entities.users,
    errors: state.errors,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: () => dispatch(fetchUser()),
    deletePost: postId => dispatch(deletePost(postId)),
    likePost: (post, userId) => dispatch(likePost(post, userId)),
    unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
    createComment: (post, userId) => dispatch(createComment(post, userId)),
    deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),

    // not used yet
    // fetchPost: postId => dispatch(fetchPost(postId)),
    // createPost: postId => dispatch(createPost(postId)),
    // updatePost: postId => dispatch(updatePost(postId)),
    // deletePost: postId => dispatch(deletePost(postId)),
    // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
