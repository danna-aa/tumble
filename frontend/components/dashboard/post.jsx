import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { stringify } from 'querystring';
import { openModal } from "../../actions/modal_actions";

// import { CSSTransition } from "react-transition-group";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: this.props.post,
            dropdown: 'hidden',
            // notes: Math.floor(Math.random() * 2000),
            display: true,
            popupVisible: false,
            liked: (this.props.userId in this.props.post.likes),
            userId: this.props.userId
        };

        this.handleLike = this.handleLike.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPost(this.props.match.params(id));


        // console.log('====================================');
        // console.log(this.state);
        // console.log(this.props.post.post_type);
        // console.log('====================================');
    }

    handleDelete(e) {
        let postId = this.state.post.id;
        this.props.deletePost(postId);
    }

    handleLike(e) {
        console.log("heart");
        e.currentTarget.classList.toggle("liked");
        if (!this.state.liked) {
            // console.log("try to like");
            this.props
                .likePost(this.props.post, this.state.userId)
                .then(() => this.setState({ liked: true }));

        } else if ( this.state.liked ) {
            // console.log("try to unlike");
            // console.log(this.props.post.id);
            // console.log(this.props.post.likes[this.state.userId].id);
            this.props
              .unlikePost(
                this.props.post.id,
                this.props.post.likes[this.state.userId]
              )
              .then(() => this.setState({ liked: false }));

        }

    }

    toggleDropdown() {
        if (this.state.dropdown === 'hidden') {
            this.setState({ dropdown: '' });
        } else {
            this.setState({ dropdown: 'hidden' });
        }

        if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener(
            "click",
            this.handleOutsideClick,
            false
            );
        } else {
            document.removeEventListener(
            "click",
            this.handleOutsideClick,
            false
            );
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        // if (this.node && this.node.contains(e.target)) {
        //     return;
        // }
        
        this.toggleDropdown();
    }



    render() {

     
        let { post, users, session } = this.props;




        // clipboard setup for sharing
        let clipboard = new ClipboardJS(`.share-button-${post.id}`);

        clipboard.on("success", function(e) {
            // console.info("Action:", e.action);
            // console.info("Text:", e.text);
            // console.info("Trigger:", e.trigger);
            let alert = document.querySelector(`.copied-alert-${post.id}`);
            alert.classList.remove("hidden");
            setTimeout(() => {
                alert.classList.add("hidden");
            }, 300);

            e.clearSelection();
        });

        // clipboard.on("error", function(e) {
        //     console.error("Action:", e.action);
        //     console.error("Trigger:", e.trigger);
        // });




        






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
            htmlDiv = (
                <div className="post-content-item-html">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            )
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
        let liked;
        if (this.state.liked) {
            liked = "liked"
        }

        let footerIconRight = (
          <div
            className={`post-interaction-icon heart ${liked}`}
            onClick={this.handleLike}
            title="Like"
          >
            <i className="fas fa-heart"></i>
          </div>
        );
        if (post.user_id === session.id) {
            footerIconRight = (
              <div
                className="post-interaction-icon edit"
                onClick={this.toggleDropdown}
                title="Post Options"
              >
                <i className="fas fa-cog"></i>
              </div>
            );
        }

        let numNotes = 0;
        if (this.props.post.likes) {
            numNotes = Object.keys(this.props.post.likes).length;
        }
        
        return (
          //   <CSSTransition
          //     in={this.state.display}
          //     timeout={350}
          //     classNames="display"
          //     unmountOnExit
          //   >
          <div
            className="dashboard-item"
            ref={node => {
              this.node = node;
            }}
          >
            <div className="avatar">
              <Link to={`/users/${post.user_id}`} className="avatar-link">
                <img className="avatar-image" src={post.avatar} alt="" />
              </Link>
            </div>

            <div className="dashboard-background">
              <div className="post-content-box">
                <Link to={`/posts/${this.props.post.id}`} className="user-link">
                  {post.username}
                </Link>

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
                  {/* currently only has likes, modify number to include other notes once features implemented */}
                  <Link to={`/posts/${this.props.post.id}`}>
                    <h4>{`${numNotes} notes`}</h4>
                  </Link>
                </div>
                <div className="post-interaction-icons">
                  <div
                    className={`post-interaction-icon share share-button share-button-${post.id}`}
                    data-clipboard-text={`https://tumble.herokuapp.com/#/posts/${post.id}`}
                    title="Share"
                  >
                    <i className="fab fa-telegram-plane"></i>
                  </div>
                  <div
                    className={`copied-alert copied-alert-${post.id} hidden`}
                  >
                    <div>Copied!</div>
                  </div>

                  {/* <div className="post-interaction-icon comment" title="Reply">
                    <i className="far fa-comment"></i>
                  </div> */}
                  <div
                    className="post-interaction-icon reblog"
                    title="Reblog"
                    onClick={() => dispatch(openModal(post.post_type))}
                  >
                    <i className="fas fa-retweet"></i>
                  </div>
                  {footerIconRight}

                  <div className={`gear-dropdown ${this.state.dropdown}`}>
                    <div onClick={() => dispatch(openModal(post.post_type))}>
                      Edit
                    </div>
                    <div onClick={e => this.handleDelete(e)}>Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //   </CSSTransition>
        );
    }
}

export default Post;


// post2.video.attach(io: File.open(“/Users/dannaxu/Desktop/jacket.jpg”), filename: “danna”)
