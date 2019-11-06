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
        let emailForm = <div />

        if (this.props.formType === 'signup') {
            emailForm = (
                <div>
                    {/* <label>Email: */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email"
                        />
                    {/* </label> */}
                </div>
            )
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="login-form">
                    <Logo />
                    <br/>
                    <div className="render-errors">
                        {this.renderErrors()}
                    </div>
                    <div>
                        {/* <label>Username: */}
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Username"
                            />
                        {/* </label> */}
                    </div>
                    {emailForm}
                    <div>
                        {/* <label>Password: */}
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                            />
                        {/* </label> */}
                    </div>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
