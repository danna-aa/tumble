import { 
    RECEIVE_POSTS, 
    RECEIVE_POST, 
    RECEIVE_SINGLE_POST, 
    REMOVE_POST,
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, action.posts);
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case RECEIVE_SINGLE_POST:
            return Object.assign({}, { [action.post.id]: action.post });
        case REMOVE_POST:
            let newState = Object.assign({}, state);
            delete (newState[action.postId]);
            return newState;
        default:
            return state;
    }
};

export default postsReducer;