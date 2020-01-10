import { 
    RECEIVE_POSTS, 
    RECEIVE_POST, 
    RECEIVE_SINGLE_POST, 
    REMOVE_POST,
} from "../actions/post_actions";

import {
    RECEIVE_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";

import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from "../actions/comment_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let userId;
    let postId;
    let like;
    let commentId;
    let comment;
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, action.posts);
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case RECEIVE_SINGLE_POST:
            return Object.assign({}, { [action.post.id]: action.post });
        case REMOVE_POST:
            delete (newState[action.postId]);
            return newState;
        case RECEIVE_LIKE:
            like = action.like;
            userId = like.user_id;
            postId = like.post_id;
            newState[postId].likes[userId] = like;
            return newState;
        case REMOVE_LIKE:
            like = action.like;
            userId = like.user_id;
            postId = like.post_id;
            delete newState[postId].likes[userId];
            return newState;
        case RECEIVE_COMMENT:
            comment = action.comment;
            commentId = comment.id;
            postId = comment.post_id;
            newState[postId].comments[commentId] = comment;
            return newState;
        case REMOVE_COMMENT:
            comment = action.comment;
            commentId = comment.id;
            postId = comment.post_id;
            delete newState[postId].comments[commentId];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;