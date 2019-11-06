import React from 'react';
let logo = ['./new-new-tumblr-logo.svg', './tumblr-logo.svg'];

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            logo: logo[0]
        };
    }

    render() {
        return (
            <div className="tumblr-logo">
                <img width="232px" height="50px" src={this.state.logo} alt="tumblr"/> 
            </div>
        )
    }
}

export default Logo;