import React from 'react';

class Devlinks extends React.Component {
    render() {
        return (
            <ul className="devlinks">

                {/* link to github  */}
                <li>
                    <a href="https://github.com/danna-aa/Fullstack-Project" className="icon"><i className="fab fa-github-alt"></i></a>
                </li>

                {/* link to linkedin  */}
                <li>
                    <a href="https://www.linkedin.com/in/dannaxu/" className="icon"><i className="fab fa-linkedin"></i></a>
                </li>
            </ul>
        )
    }
}

export default Devlinks;