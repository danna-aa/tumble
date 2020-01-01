import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const REMOVE_POST = "REMOVE_POST";
// export const RECEIVE_LIKED_POSTS = "RECEIVE_LIKED_POSTS";

// actions
export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receiveSinglePost = post => ({
    type: RECEIVE_SINGLE_POST,
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

// thunk actions
export const fetchPosts = ( filter ) => dispatch => (
    PostAPIUtil.fetchPosts( filter )
        .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
);

export const fetchSinglePost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then(post => dispatch(receiveSinglePost(post)))
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

export const createPhotoPost = post => dispatch => (
    PostUtil.createPhotoPost(post)
        .then(post => dispatch(receivePost(post)))
);

export const createVideoPost = post => dispatch => (
    PostUtil.createVideoPost(post)
        .then(post => dispatch(receivePost(post)))
);

export const createAudioPost = post => dispatch => (
    PostUtil.createAudioPost(post)
        .then(post => dispatch(receivePost(post)))
);

