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
import { fetchFollows, follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  posts: state.entities.posts,
  users: state.entities.users,
  follows: state.entities.follows,
  session: state.session,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: filter => dispatch(fetchPosts(filter)),
  fetchUsers: () => dispatch(fetchUsers()),
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: postId => dispatch(updatePost(postId)),
  likePost: (post, userId) => dispatch(likePost(post, userId)),
  unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
  createComment: (post, userId) => dispatch(createComment(post, userId)),
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
  fetchFollows: () => dispatch(fetchFollows()),
  follow: (creator_id) => dispatch(follow(creator_id)),
  unfollow: (followId) => dispatch(unfollow(followId)),

  // not used yet
  // fetchPost: postId => dispatch(fetchPost(postId)),
  // createPost: postId => dispatch(createPost(postId)),
  // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
