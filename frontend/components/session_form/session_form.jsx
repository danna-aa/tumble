import React from 'react';
import Logo from './logo';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        if (this.props.errors.length !== 0) {
            return (
                <ul>
                    {/* {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))} */}
                    {
                        <li key={`error-${0}`}>
                            <div className="first-error">
                                {this.props.errors[0]}
                            </div>
                        </li>
                    }
                </ul>
            );
        } else {
            return <div />
        }
    }

    render() {
        // when signing up, render email input, tagline, and get started button
        let emailForm = <div />
        let tagline = (<div className="login-form-tagline"/>)
        let getStartedButton = <div />

        if (this.props.formType === 'Sign up') {
            emailForm = (
                <div>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input email"
                        placeholder="Email"
                    />
                </div>
            )
            tagline = (
                <div className="login-form-tagline">
                    <h3>Come for what you love.</h3>
                    <h3>Stay for what you discover.</h3>
                </div>
            )
            getStartedButton = (
                <button className="session-submit">Get Started</button>
            )
        }

        return (
            // sign up / login form
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">

                        {/* 'tumblr logo' */}
                        <Logo />

                        {/* renders if signing up (versus logging in) */}
                        {tagline}
                        {getStartedButton}

                        <div className="login-form-text-boxes-group">
                            {/* username field */}
                            <div>
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input username"
                                    placeholder="Username"
                                />
                            </div>

                            {/* renders if signing up (versus logging in) */}
                            {emailForm}

                            {/* password field */}
                            <div>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input password"
                                    placeholder="Password"
                                />
                            </div>

                            {/* render errors */}
                            <div className="render-errors">
                                {this.renderErrors()}
                            </div>

                        </div>

                        {/* submit button  */}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
