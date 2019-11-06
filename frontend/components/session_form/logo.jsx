import React from 'react';
let logo = ['./tumblr-logo.svg'];

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            logo: logo[0]
        };
    }

    render() {
        return (
            <div>
                <img width="300px" src={this.state.logo} alt="tumblr"/> 
            </div>
        )
    }
}

export default Logo;