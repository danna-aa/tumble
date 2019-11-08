import React from 'react';
import Logo from './logo';
import { Link, Redirect } from 'react-router-dom';
import Typing from 'react-typing-animation';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.randombg = this.randombg.bind(this);
        this.backgroundImage = this.randombg();
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleGetStarted = this. handleGetStarted.bind(this);
    }

    handleGetStarted(e) {
        const initiallyHidden = document.getElementsByClassName("initially-hidden");
        while (initiallyHidden.length) {
            initiallyHidden[0].classList.remove("initially-hidden");
        }
        e.currentTarget.classList.add("invisible");
        // if (e.currentTarget.hasClass("demouser")) {
        //     e.currentTarget.classList.add("fade-out");
        // } else {
        //     e.currentTarget.classList.add("invisible");
        // }
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

    randombg() {
        const backgroundsArray = [
            "url('/background_images/000.jpg')",
            "url('/background_images/001.jpg')",
            "url('/background_images/002.jpg')",
            "url('/background_images/003.jpg')",
            "url('/background_images/004.jpg')",
            "url('/background_images/005.jpg')",
            "url('/background_images/006.jpg')",
            "url('/background_images/007.jpg')",
            "url('/background_images/008.jpg')",
            "url('/background_images/009.jpg')",
            "url('/background_images/010.jpg')",
            "url('/background_images/011.jpg')",
            "url('/background_images/012.jpg')",
            "url('/background_images/013.jpg')",
            "url('/background_images/014.png')",
            "url('/background_images/015.jpg')",
            "url('/background_images/016.jpg')",
            "url('/background_images/017.png')",
            "url('/background_images/018.jpg')",
            "url('/background_images/019.jpg')",
            "url('/background_images/020.jpg')",
            "url('/background_images/021.jpg')",
            "url('/background_images/022.jpg')",
            "url('/background_images/023.jpg')",
            "url('/background_images/024.jpg')",
            "url('/background_images/025.jpg')",
            "url('/background_images/026.jpg')",
            "url('/background_images/027.jpg')",
            "url('/background_images/028.jpeg')",
            "url('/background_images/029.jpg')",
            "url('/background_images/030.jpg')",
            "url('/background_images/031.jpg')",
            "url('/background_images/032.png')",
            "url('/background_images/033.png')",
            "url('/background_images/034.jpg')",
            "url('/background_images/035.png')",
            "url('/background_images/036.jpg')",
            "url('/background_images/037.jpg')",
            "url('/background_images/038.jpg')",
            "url('/background_images/039.jpg')",
            "url('/background_images/040.png')",
            "url('/background_images/041.jpg')",
            "url('/background_images/042.jpg')",
            "url('/background_images/043.jpg')",
            "url('/background_images/044.jpg')",
            "url('/background_images/045.gif')",
            "url('/background_images/046.png')",
            "url('/background_images/047.jpg')",
            "url('/background_images/048.gif')",
            "url('/background_images/049.jpg')",
            "url('/background_images/050.png')",
            "url('/background_images/051.jpg')",
            "url('/background_images/052.gif')",
            "url('/background_images/053.gif')",
            "url('/background_images/054.gif')",
            "url('/background_images/055.gif')",
            "url('/background_images/056.gif')",
            "url('/background_images/057.gif')",
            "url('/background_images/058.gif')",
            "url('/background_images/059.gif')",
            "url('/background_images/060.gif')",
            "url('/background_images/061.gif')"
        ];
        const rand = Math.floor(Math.random() * backgroundsArray.length);    
        return ({ backgroundImage: backgroundsArray[rand] })
    }

    handleDemoLogin(e) {
        if (this.props.formType === "Sign up") {
            $(".email").addClass("invisible");
            $(".blue-button").addClass("invisible");
            setTimeout(() => {
                this.loginDemoUser();
            }, 500);
        } else {
            this.loginDemoUser();
        }
    }

    loginDemoUser() {
        this.setState({ username: "" });
        this.inputUsername("Demo");
        setTimeout(() => {
            this.setState({ password: "" });
            this.inputPassword("password");
        }, 800);
    }

    inputUsername(username) {
        if (username.length <= 0) return;
        setTimeout(() => {
            let usernameArray = username.split("");
            let currentUsername = this.state.username;
            currentUsername += usernameArray.shift();
            this.setState({username: currentUsername});
            let newUsername = usernameArray.join("");
            this.inputUsername(newUsername);
        }, 100);
    }

    inputPassword(password) {
        if (password.length <= 0) {
            return this.submitLogin();
        };
        setTimeout(() => {
            let passwordArray = password.split("");
            let currentPassword = this.state.password;
            currentPassword += passwordArray.shift();
            this.setState({ password: currentPassword });
            let newPassword = passwordArray.join("");
            this.inputPassword(newPassword);
        }, 100);
    }

    submitLogin() {
        const user = Object.assign({}, this.state);
        this.props.loginUser(user);
    }

    changeRoutePath(e, link) {
        e.preventDefault();
        this.props.history.push(link);
    }

    render() {
        // when signing up, render email input, tagline, and get started button
        let getStartedButton = <div />
        let emailForm = <div />
        let tagline = (<div className="login-form-tagline"/>)
        let loginLink = <div />

        if (this.props.formType === 'Sign up') {
            getStartedButton = (
                <button className="blue-button" onClick={this.handleGetStarted}>Get Started</button>
            )
            emailForm = (
                <div>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className={"login-input email" + ((this.props.formType === 'Sign up') ? " initially-hidden" : "") }
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
            loginLink = (
                <input
                    className="login-button"
                    type="button"
                    value="Log in"
                    onClick={(e) => this.changeRoutePath(e, '/login')}
                />
            )
        }

        return (
            // sign up / login form
            <div className="session-form">
                <div id="random" className="login-form-background-container" style={this.backgroundImage}>                    
                    <div className="login-form-container">
                        {/* 'tumblr logo' */}
                        <div className="form-box">
                            
                            <Logo />

                            {/* renders if signing up (versus logging in) */}
                            {tagline}
                            <br/>
                            {getStartedButton}

                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form">

                                

                                    <div className="login-form-text-boxes-group">

                                        {/* username field */}
                                        <div>
                                            <input type="text"
                                                value={this.state.username}
                                                onChange={this.update('username animate-username')}
                                                className={"login-input username" + ((this.props.formType === 'Sign up') ? " initially-hidden" : "") }
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
                                                className={"login-input password" + ((this.props.formType === 'Sign up') ? " initially-hidden" : "") }
                                                placeholder="Password"
                                            />
                                        </div>

                                        {/* render errors */}
                                        <div className="render-errors">
                                            {this.renderErrors()}
                                        </div>

                                    </div>

                                    {/* submit button  */}
                                    <input 
                                        type="submit" 
                                        className={"session-submit blue-button" + ((this.props.formType === 'Sign up') ? " initially-hidden" : "") }
                                        value={this.props.formType}
                                    />
                                    
                                    <br/>

                                    {/* link to login instead */}
                                    { loginLink }

                                    {/* demo user */}
                                    <div className="demoUser" onClick={(e) => { this.handleGetStarted(e); this.handleDemoLogin(e) }}>
                                        <i className="fas fa-user-circle"></i> <div>Explore demo login</div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;
