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
            commentsDropdown: 'hidden',
            // notes: Math.floor(Math.random() * 2000),
            display: true,
            popupVisible: false,
            commentsVisible: false,
            liked: (this.props.userId in this.props.post.likes),
            userId: this.props.userId,
            comment: ""
        };

        this.handleLike = this.handleLike.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleCommentsDropdown = this.toggleCommentsDropdown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleCommentsOutsideClick = this.handleCommentsOutsideClick.bind(this);
        this.handleMakeComment = this.handleMakeComment.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPost(this.props.match.params(id));


        // console.log('====================================');
        // console.log(this.state);
        // console.log(this.props.post.post_type);
        // console.log('====================================');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleDelete(e) {
		// e.preventDefault();
        let postId = this.state.post.id;
        this.props.deletePost(postId);
    }

    handleLike(e) {
		e.preventDefault();
        // console.log("heart");
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

    handleMakeComment(e) {
		e.preventDefault();
        let comment = {user_id: this.props.session.id, post_id: this.props.post.id, body: this.state.comment};
        this.props.createComment(this.props.post.id, comment);

        let inputs = document.getElementsByClassName("comment-text-input");
        for (let i = 0; i < inputs.length; i++) {
          	inputs[i].value = "";
        }
    }

    toggleDropdown() {
		// e.preventDefault();
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

    toggleCommentsDropdown() {
        if (this.state.commentsDropdown === 'hidden') {
            this.setState({ commentsDropdown: "" });
        } else {
            this.setState({ commentsDropdown: "hidden" });
        }

        if (!this.state.commentsVisible) {
            // attach/remove event handler
            document.addEventListener(
            "click",
            this.handleCommentsOutsideClick,
            false
            );
        } else {
            document.removeEventListener(
            "click",
            this.handleCommentsOutsideClick,
            false
            );
        }

        this.setState(prevState => ({
            commentsVisible: !prevState.commentsVisible
        }));
    }

    handleOutsideClick(e) {
		// e.preventDefault();
        // ignore clicks on the component itself
        // if (this.node && this.node.contains(e.target)) {
        //     return;
        // }
        
        this.toggleDropdown();
    }

    handleCommentsOutsideClick(e) {
		// e.preventDefault();
        if (this.node && this.node.contains(e.target)) {
            return;
        }
        this.toggleCommentsDropdown();
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

        // tags
        let tags 
        let tagsArray = Object.values(post.tags)
        if ( tagsArray.length > 0 ) {
            tags = (tagsArray.map((tagPacket, j) => (
                tagPacket.tag_body.split(" ").map((tag, i) => (
                    <div key={j + "-"+ i} className="tag">{`#` + tag}</div>
                ))
            )))
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

        
        // comment list 
        let commentsList;
        let commentsSorted = Object.values(this.props.post.comments).sort((a, b) =>
        a.created_at > b.created_at ? 1 : -1
        );
        let comments = commentsSorted.map(comment => (
            <div key={comment.id} id={`comment-${comment.id}`} className="post-comment">
            <div className="post-comment-content">{comment.body}</div>

            { comment.user_id === session.id &&
                (<div className="trash" onClick={() => this.props.deleteComment(comment.post_id, comment)}>
                    <i className="fas fa-trash-alt"></i>
                </div>)
            }

          </div>
        ));
        
        let numNotes = 0;
        let numComments = Object.keys(this.props.post.comments).length;
        let numLikes = Object.keys(this.props.post.likes).length;

        numNotes = numComments + numLikes;
        
        
        commentsList = (
          <div className={`post-comments ${this.state.commentsDropdown}`}>
            <div className="post-comments-title">
              {numComments} Comments
              <div className="x" onClick={this.toggleCommentsDropdown}>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="post-comments-list">
              {comments}
              <div className="post-comments-list-anchor"></div>
            </div>
            <form
              className="post-comments-form"
              onSubmit={this.handleMakeComment}
            >
              <input
                type="text"
                placeholder="Leave a comment"
                className="comment-text-input"
                onChange={this.update("comment")}
              />
              <button className="comment-form-button">Reply</button>
            </form>
          </div>
        );
        
        
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
              <Link to={`/posts/${this.props.post.id}`} className="fold-link">
                <div className="fold"></div>
              </Link>

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
                <p className="post-content-item post-body">{post.body}</p>
                {sourceLink}
                <div className="tags-container">
                    {tags}
                </div>
              </div>

              <div className="post-footer">
                {/* notes */}
                <div className="number-notes">
                  {/* currently only has likes, modify number to include other notes once features implemented */}
                  <Link to={`/posts/${this.props.post.id}`}>
                    <h4>{`${numNotes} notes`}</h4>
                  </Link>
                </div>

                <div className="post-interaction-icons">
                  {/* share */}
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

                  {/* comment */}
                  <div
                    className="post-interaction-icon comment"
                    title="Reply"
                    onClick={this.toggleCommentsDropdown}
                  >
                    <i className="far fa-comment"></i>
                  </div>
                  {commentsList}

                  {/* reblog */}
                  <div
                    className="post-interaction-icon reblog"
                    title="Reblog"
                    onClick={() => dispatch(openModal(post.post_type))}
                  >
                    <i className="fas fa-retweet"></i>
                  </div>
                  {footerIconRight}

                  {/* post options menu */}
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
