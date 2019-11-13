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
        let { post, users } = this.props;

        // images 
        let imageListString = post.image_url;
        let picList;
        if (imageListString) {
            picList = imageListString.split(" ").map((image, i) => (
                <img key={i} className="post-content-item" src={image} alt={`image ${i}`} />
            ));
        }

        return (
            <div className="explore-item">

                <div className="explore-background">

                    <div className="explore-link-div">
                        <Link to={`/users/${this.props.post.user_id}`} className="user-link">{post.username}</Link>
                    </div>
                    
                    <div className="explore-content-box">
                        <h1 className="explore-content-item">{post.title}</h1>
                        <p className="explore-content-item">{post.body}</p>

                        {picList}

                    </div>
                </div>
            </div>
        )
    }
}

export default Post;