import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.match.params(id));
    // }

    render() {
        return (
            <div className="dashboard-item" key={this.props.post.id}>
                <div className="avatar">
                    <img className="avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" />
                </div>
                <div className="dashboard-background">
                    <div>
                        <h1>{this.props.post.id}</h1>
                        <h1>{this.props.post.title}</h1>
                        <h1>{this.props.post.body}</h1>
                        <h1>{this.props.post.user_id}</h1>
                        <img className={`test-image id_${this.props.post.id}`} src="https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg" alt="test-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;