import { connect } from "react-redux";
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
  fetchOwnPosts
} from "../../actions/post_actions";
import { likePost, unlikePost } from "../../actions/like_actions";
import { createComment, deleteComment } from "../../actions/comment_actions";
import { fetchUsers } from "../../actions/session_actions";
import Search from "./search";

const mapStateToProps = state => ({
  posts: state.entities.posts,
  users: state.entities.users,
  errors: state.errors,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: filter => dispatch(fetchPosts(filter)),
  fetchUsers: () => dispatch(fetchUsers()),
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: postId => dispatch(updatePost(postId)),
  likePost: (post, userId) => dispatch(likePost(post, userId)),
  unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
  createComment: (post, userId) => dispatch(createComment(post, userId)),
  deleteComment: (postId, commentId) =>
  dispatch(deleteComment(postId, commentId))

  // not used yet
  // fetchPost: postId => dispatch(fetchPost(postId)),
  // createPost: postId => dispatch(createPost(postId)),
  // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
