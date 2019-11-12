import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
// export const RECEIVE_LIKED_POSTS = "RECEIVE_LIKED_POSTS";
export const RECEIVE_OWN_POSTS = "RECEIVE_OWN_POSTS";

// actions
export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

// export const receiveLikedPosts = (payload) => ({
//     type: RECEIVE_LIKED_POSTS,
//     payload
// });

export const receiveOwnPosts = posts => ({
    type: RECEIVE_OWN_POSTS,
    posts
});

// thunk actions
export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostAPIUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
);

export const fetchOwnPosts = userId => dispatch => (
    PostAPIUtil.fetchOwnPosts(userId)
        .then(posts => dispatch(receiveOwnPosts(posts)))
);