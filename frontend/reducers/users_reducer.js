import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            // console.log(action);
            return Object.assign({}, action.users );
        default:
            return state;
    }
};

export default usersReducer;
