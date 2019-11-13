import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.match.params(id));
    // }

    render() {
        let {post, users} = this.props;

        // images 
        let imageListString = post.image_url;
        let picList;
        if (imageListString) {
            picList = imageListString.split(" ").map((image, i) => (
                <img key={i} className="post-content-item" src={image} alt={`image ${i}`} />
            ));
        }
        
        return (
            <div className="dashboard-item">

                <div className="avatar">
                    <img className="avatar-image" src="https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png" alt="" />
                </div>

                <div className="dashboard-background">

                    <div className="post-content-box">
                        <Link to={`/users/${this.props.post.user_id}`} className="user-link">{post.username}</Link>
                        <h1 className="post-content-item">{post.title}</h1>
                        <p className="post-content-item">{post.body}</p>

                        {picList}

                    </div>
                </div>
            </div>
        )
    }
}

export default Post;