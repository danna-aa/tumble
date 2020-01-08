import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";

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
                <img key={i} className="post-content-item explore-content" src={image} alt={`image ${i}`} />
            ));
        }

        // video
        let video = <div />
        if (post.video_url) {
            video = (
              <div className="player-wrapper">
                <ReactPlayer
                  url={post.video_url}
                  controls
                  loop
                  className="post-content-item exlore-content-item react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            );
            
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
                  <div className="source-link-container exlore-content-item">
                    Source:{" "}
                    <a href={makeLink(post.source)} className="source-link">
                      {clipLongText(13, post.source_alias)}
                    </a>
                  </div>
                );
            } else {
                sourceLink = (
                  <div className="source-link-container exlore-content-item">
                    Source:{" "}
                    <a href={makeLink(post.source)} className="source-link">
                      {clipLongText(70, post.source)}
                    </a>
                  </div>
                );
                
            }
        }

        // link
        let linkLink = <div />
        if (post.link) {
            if (post.link_alias) {
                linkLink = (
                    <div className="link-link-container explore-content-item">
                        <a href={makeLink(post.link)} className="link-link">
                            <div className="link-url">{post.link}</div>
                            <div className="link-alias">{clipLongText(20, post.link_alias)}</div>   
                        </a>
                    </div>
                )
                
            } else {
                linkLink = (
                    <div className="link-link-container explore-content-item">
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
            htmlDiv = (
              <div className="post-content-item-html exlore-content-item">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            );
        }   

        const fileName = (url) => {
            let urlArray = url.split("/");
            return urlArray[urlArray.length - 1]
        }

        // attached photos
        let attachedPhotos = <div />

        if (post.photoUrls) {
            attachedPhotos = Object.values(post.photoUrls).map((photoUrl, i) => (
                <img key={i} className="post-content-item explore-content" src={photoUrl} alt={fileName(photoUrl)} />
            ))
        }

        // attached video
        let attachedVideo = <div />
        if (post.videoUrl) {
            attachedVideo = (
                <div className="player-wrapper">
                    <ReactPlayer
                    url={post.videoUrl}
                    controls
                    loop
                    className="post-content-item exlore-content-item react-player"
                    width="100%"
                    height="100%"
                    />
                </div>
            )
        }

        // attached audio
        let attachedAudio = <div />
        if (post.audioUrl) {
            attachedAudio = (
                <div className="player-wrapper">

                    <ReactAudioPlayer
                      src={post.audioUrl}
                      autoplay
                      controls
                      className="post-content-item exlore-content-item react-player"
                      width="100%"
                      height="100%"
                    />
                </div>
            );
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

                        {linkLink}
                        {picList}
                        {attachedPhotos}
                        {video}
                        {attachedVideo}
                        {attachedAudio}
                        {htmlDiv}

                    </div>
                </div>
            </div>
        )
    }
}

export default Post;