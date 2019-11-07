import React from 'react';
let logo = ['./new-new-tumblr-logo.svg', './tumblr-logo.svg'];
import { Link } from 'react-router-dom';

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
                <Link to="/"><img width="232px" height="50px" src={this.state.logo} alt="tumblr"/> </Link>
            </div>
        )
    }
}

export default Logo;