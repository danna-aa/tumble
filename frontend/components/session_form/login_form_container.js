import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, refreshErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/">Sign up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        loginUser: (user) => dispatch(login(user)),
        refreshErrors: () => dispatch(refreshErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
