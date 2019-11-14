// entry file
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';

// test
import { login, signup, logout, fetchUsers } from './actions/session_actions';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts, fetchAllPosts } from './actions/post_actions';
// test end

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

    // for development tests

    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchPosts = fetchPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;
    window.fetchOwnPosts = fetchOwnPosts;
    window.fetchAllPosts = fetchAllPosts;
    window.fetchUsers = fetchUsers;

    // test end
});
