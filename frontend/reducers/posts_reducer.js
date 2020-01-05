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

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let userId;
    let postId;
    let like;
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
            userId = action.like.user_id;
            postId = action.like.post_id;
            newState[postId].likes[userId] = like;
            return newState;
        case REMOVE_LIKE:
            console.log(action);
            userId = action.like.user_id;
            postId = action.like.post_id;
            delete newState[postId].likes[userId];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;