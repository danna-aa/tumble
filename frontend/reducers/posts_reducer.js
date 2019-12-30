import { 
    RECEIVE_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST,
    RECEIVE_OWN_POSTS,
    RECEIVE_ALL_POSTS
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, action.posts);
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case REMOVE_POST:
            let newState = Object.assign({}, state);
            delete (newState[action.postId]);
            return newState;
        // case RECEIVE_OWN_POSTS:
        //     return Object.assign({}, action.posts);
        // case RECEIVE_ALL_POSTS:
        //     return Object.assign({}, state, action.posts);
        default:
            return state;
    }
};

export default postsReducer;