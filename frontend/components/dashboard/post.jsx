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

        // video
        let video = <div />
        if (post.video) {
            video = <video src={post.video} className="video"></video>
        }

        // source
        let sourceLink = <div />
        if (post.source) {
            if (post.source_alias) {
                sourceLink = <a href={post.source} className="source-link">{post.source_alias}</a>
            } else {
                sourceLink = <a href={post.source} className="source-link">{post.source}</a>
            }
        }

        // link
        let linkLink = <div />
        if (post.link) {
            if (post.link_alias) {
                linkLink = <a href={post.link} className="link-link">{post.link_alias}</a>
            } else {
                linkLink = <a href={post.link} className="link-link">{post.link}</a>
            }
        }

        // html
        let html = <div />
        if (post.html) {
            html = post.html
        }

        // attached photos
        let attachedPhotos = <div className="attached-photos-box"></div>
        if (post.attachedPhotos) {

        }

        // attached video

     
        
        return (
            <div className="dashboard-item">

                <div className="avatar">
                    <img className="avatar-image" src={post.avatar} alt="" />
                </div>

                <div className="dashboard-background">

                    <div className="post-content-box">

                        <Link to={`/users/${this.props.post.user_id}`} className="user-link">{post.username}</Link>
                        
                        <h1 className="post-content-item">{post.title}</h1>
                        {linkLink}
                        <p className="post-content-item">{post.body}</p>

                        {picList}
                        {video}
                        {html}
                        {sourceLink}
                    ≠
                        
                    </div>















                    <div className="post-footer">
                        <div className="number-notes">
                            <h4>{`${Math.floor(Math.random()*2000)} notes`}</h4>
                        </div>
                        <div className="post-interaction-icons">
                            <div className="post-interaction-icon share"><i className="fab fa-telegram-plane"></i></div>
                            <div className="post-interaction-icon comment"><i className="far fa-comment"></i></div>
                            <div className="post-interaction-icon reblog"><i className="fas fa-retweet"></i></div>
                            <div className="post-interaction-icon heart"><i className="far fa-heart"></i></div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Post;