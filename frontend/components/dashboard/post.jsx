import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { stringify } from 'querystring';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleLike = this.handleLike.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.match.params(id));
    // }

    handleLike(e) {
        console.log("heart");
        e.currentTarget.classList.toggle("liked");
    }

    render() {
        let { post, users, session } = this.props;

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
        if (post.video_url) {
            video = <ReactPlayer url={post.video_url} controls loop className="post-content-item" />
            // video = <div>video asdfkjasdlfhajskdf</div>
        }

        // source
        function clipLongText(charLength, str) {
            if (str.length > charLength) {
                return str.slice(0, charLength) + "..."
            } else {
                return str
            }
        }

<<<<<<< HEAD
=======





>>>>>>> e2b058084dd0888076c72d73ff4c2971edb50ff6
        function makeLink(str) {
            if (!str.includes("http://")) {
                return "http://" + str;
            } else {
                return str;
            }
        }

        let sourceLink = <div />
        if (post.source) {
            if (post.source_alias) {
                sourceLink = (
                    <div className="source-link-container">
                        Source: <a href={makeLink(post.source)} className="source-link">{clipLongText(13, post.source_alias)}</a>
                    </div>
                )
            } else {
                sourceLink = (
                    <div className="source-link-container">
                        Source: <a href={makeLink(post.source)} className="source-link">{clipLongText(70, post.source)}</a>
                    </div>
                )
                
            }
        }

        // link
        let linkLink = <div />
        if (post.link) {
            if (post.link_alias) {
                linkLink = (
                    <div className="link-link-container">
                        <a href={makeLink(post.link)} className="link-link">
                            <div className="link-url">{post.link}</div>
                            <div className="link-alias">{clipLongText(20, post.link_alias)}</div>   
                        </a>
                    </div>
                )
                
            } else {
                linkLink = (
                    <div className="link-link-container">
                        <a href={makeLink(post.link)} className="link-link">
                            <div className="link-alias">{clipLongText(37, post.link)}</div>
                        </a>
                    </div>

                )
            }
        }

        // html
        let htmlDiv = <div></div>
        if (post.html) {
<<<<<<< HEAD
            htmlDiv = (
                <p className="post-content-item">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </p>
            )
=======
            htmlDiv = <div dangerouslySetInnerHTML={{ __html: post.html }} />
>>>>>>> e2b058084dd0888076c72d73ff4c2971edb50ff6
        }   

        const fileName = (url) => {
            let urlArray = url.split("/");
            return urlArray[urlArray.length - 1]
        }

        // attached photos
        let attachedPhotos = <div />

        if (post.photoUrls) {
            attachedPhotos = Object.values(post.photoUrls).map((photoUrl, i) => (
                <img key={i} className="post-content-item" src={photoUrl} alt={fileName(photoUrl)} />
            ))
        }

        // attached video
        let attachedVideo = <div />
        if (post.videoUrl) {
            attachedVideo = <ReactPlayer url={post.videoUrl} controls loop className="post-content-item" height="100%"/>
        }

        // attached audio
        let attachedAudio = <div />
        if (post.audioUrl) {
            attachedAudio = <ReactAudioPlayer src={post.audioUrl} autoplay controls className="post-content-item" />
        }

        // edit or like button
        let footerIconRight = <div className="post-interaction-icon heart" onClick={this.handleLike}><i className="fas fa-heart"></i></div>
        if (post.user_id === session.id) {
            footerIconRight = <div className="post-interaction-icon edit"><i className="fas fa-cog"></i></div>
        }
        

     
        
        return (
            <div className="dashboard-item">
                <div className="avatar">
                    <Link to={`/users/${post.user_id}`} className="avatar-link">
                        <img className="avatar-image" src={post.avatar} alt="" />
                    </Link>
                </div>

                <div className="dashboard-background">

                    <div className="post-content-box">

                        <Link to={`/users/${this.props.post.user_id}`} className="user-link">{post.username}</Link>
                        
                        <h1 className="post-content-item">{post.title}</h1>
                        {linkLink}
                        {picList}
                        {attachedPhotos}
                        {video}
                        {attachedVideo}
                        {attachedAudio}
                        {htmlDiv}
                        <p className="post-content-item">{post.body}</p>
                        {sourceLink}
                        
                    </div>

                    <div className="post-footer">
                        <div className="number-notes">
                            <h4>{`${Math.floor(Math.random()*2000)} notes`}</h4>
                        </div>
                        <div className="post-interaction-icons">
                            <div className="post-interaction-icon share"><i className="fab fa-telegram-plane"></i></div>
                            <div className="post-interaction-icon comment"><i className="far fa-comment"></i></div>
                            <div className="post-interaction-icon reblog"><i className="fas fa-retweet"></i></div>
                            {footerIconRight}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Post;


// post2.video.attach(io: File.open(“/Users/dannaxu/Desktop/jacket.jpg”), filename: “danna”)
