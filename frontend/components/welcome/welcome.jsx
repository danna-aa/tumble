import React from 'react';
import Logo from '../session_form/logo';


class Welcome extends React.Component {
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
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // when signing up, render email input
        let emailForm = <div />
        if (this.props.formType === 'Sign up') {
            emailForm = (
                <div>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="Email"
                    />
                </div>
            )
        }

        return (
            // sign up form
            <div className="welcome-container">
                <form onSubmit={this.handleSubmit} className="welcome-signin-form">
                    <div className="welcome-signin-form-content">

                        {/* top right 't' logo */}
                        <Logo />
                        <br />

                        {/* render errors */}
                        <div className="render-errors">
                            {this.renderErrors()}
                        </div>

                        {/* username field */}
                        <div>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="welcome-input"
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
                                className="login-input"
                                placeholder="Password"
                            />
                        </div>

                        {/* submit button  */}
                        <input className="session-submit" type="submit" value={this.props.formType} />

                    </div>
                </form>
            </div>
        );
    }
}

export default Welcome;
