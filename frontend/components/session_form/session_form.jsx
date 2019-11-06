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
        this.randombg = this.randombg.bind(this);
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
            "url('/background_images/051.jpg')"
        ];
        const rand = Math.floor(Math.random() * backgroundsArray.length);    
        return { backgroundImage: backgroundsArray[rand] }
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
            <div className="session-form">
                <div id="random" className="login-form-background-container" style={this.randombg()}>

                    
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
                </div>
            </div>
        );
    }
}

export default SessionForm;
