import { connect } from 'react-redux';
import { fetchPosts, fetchAllPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import Explore from './explore';
import { fetchFollows, follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = state => ({
    posts: state.entities.posts,
    users: state.entities.users,
    follows: state.entities.follows,
    session: state.session,
    errors: state.errors,
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
    fetchFollows: () => dispatch(fetchFollows()),
    follow: (creator_id) => dispatch(follow(creator_id)),
    unfollow: (followId) => dispatch(unfollow(followId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
