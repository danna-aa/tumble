import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const refreshErrors = () => dispatch => {
    dispatch(clearErrors());
};
