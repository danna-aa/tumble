import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, refreshErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Log in</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginUser: (user) => dispatch(login(user)), 
        refreshErrors: () => dispatch(refreshErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
 