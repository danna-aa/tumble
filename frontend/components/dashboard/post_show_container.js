import { connect } from 'react-redux';
import { fetchPosts, fetchSinglePost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { fetchUsers, fetchUser } from '../../actions/session_actions';
import { likePost, unlikePost } from '../../actions/like_actions';
import { fetchFollows, follow, unfollow } from '../../actions/follow_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => ({
  posts: state.entities.posts,
  users: state.entities.users,
  follows: state.entities.follows,
  session: state.session,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: filter => dispatch(fetchPosts(filter)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: () => dispatch(fetchUser()),
  fetchSinglePost: postId => dispatch(fetchSinglePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  likePost: (post, userId) => dispatch(likePost(post, userId)),
  unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
  createComment: (post, userId) => dispatch(createComment(post, userId)),
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
  fetchFollows: () => dispatch(fetchFollows()),
  follow: (creator_id) => dispatch(follow(creator_id)),
  unfollow: (followId) => dispatch(unfollow(followId)),


  // not used yet
  // createPost: postId => dispatch(createPost(postId)),
  // updatePost: postId => dispatch(updatePost(postId)),
  // deletePost: postId => dispatch(deletePost(postId)),
  // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
