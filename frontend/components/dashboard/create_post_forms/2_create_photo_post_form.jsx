// import React from 'react';
// import { connect } from 'react-redux';
// import { createPost, createPhotoPost, createVideoPost, createAudioPost } from '../../../actions/post_actions';
// import { closeModal } from '../../../actions/modal_actions';


// class CreateTextPostForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user_id: props.currentUser.id,
//             username: props.currentUser.username,
//             title: "",
//             body: "",
//             source: "",
//             source_alias: "",
//             link: "",
//             link_alias: "",
//             image_url: "",
//             video_url: "",
//             html: "",
//             root_post_id: "",
//             parent_post_id: "",
//             post_type: props.formType,
//             private: false,
//             attached_photos: null,
//             photo_file: null,
//             photo_url: null
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     // handleFile(e) {
//     //     e.preventDefault();
//     //     const file = e.currentTarget.files[0];
//     //     const fileReader = new FileReader();
//     //     fileReader.onloadend = () => {
//     //         this.setState({ photo_file: file, photo_url: fileReader.result });
//     //     };

//     //     if (file) {
//     //         fileReader.readAsDataURL(file);
//     //     }
//     // }

//     handleSubmit(e) {
//         const post = Object.assign({}, this.state);
//         this.props.createPost(post);
//         this.props.closeModal();
//     }

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     render() {
//         const preview = this.state.photo_url ? <img src={this.state.photo_url} className="preview" /> : null;

//         return (
//             <div className="post-form-container">

//                 <form className="post-form" onSubmit={this.handleSubmit}>

//                     <div className="current-user">{this.props.currentUser.username} <i className="fas fa-chevron-down"></i></div>

//                     <div>
//                         <input type="user_id"
//                             value={this.state.user_id}
//                             onChange={this.update('user_id')}
//                             className="post-form-input"
//                             placeholder={this.state.user_id}
//                             type="hidden"
//                         />
//                     </div>

//                     <div>
//                         <input type="username"
//                             value={this.state.username}
//                             onChange={this.update('username')}
//                             className="post-form-input"
//                             placeholder={this.state.username}
//                             type="hidden"
//                         />

//                     </div>

//                     <div>
//                         <input type="image_url"
//                             value={this.state.image_url}
//                             onChange={this.update('image_url')}
//                             className="post-form-input image_url"
//                         />
//                         <div className="caption">Add photo</div>
//                     </div>

//                     {/* <div>
//                         <input type="file" 
//                             onChange={this.handleFile.bind(this)} 
//                             multiple="multiple"/>
//                     </div> */}

//                    {preview}

//                     <div>
//                         <input type="source"
//                             value={this.state.source}
//                             onChange={this.update('source')}
//                             className="post-form-input post-source"
//                             placeholder="Source"
//                         />
//                     </div>

//                     <div>
//                         <input type="source_alias"
//                             value={this.state.source_alias}
//                             onChange={this.update('source_alias')}
//                             className="post-form-input source_alias"
//                             placeholder="Source alias"
//                         />
//                     </div>

//                     <div>
//                         <input type="tags"
//                             value={this.state.tags}
//                             className="post-form-input tags"
//                             placeholder="#tags"
//                         />
//                     </div>

//                     <div className="modal-click">

//                         <button className="close-button"
//                             onClick={this.props.closeModal}>
//                             <div className="unselected">Close</div>
//                         </button>

//                         <button className="post-button" type="submit">
//                             <div className="unselected">Post</div>
//                         </button>

//                     </div>



//                 </form>

//             </div>
//         )
//     }

// }

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.id],
//     errors: state.errors.session,
//     formType: 'photo'
// })

// const mapDispatchToProps = dispatch => ({
//     createPost: post => dispatch(createPost(post)),
//     closeModal: () => dispatch(closeModal()),
//     // createPhotoPost: post => dispatch(createPhotoPost(post)),
//     // createVideoPost: post => dispatch(createVideoPost(post)),
//     // createAudioPost: post => dispatch(createAudioPost(post))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CreateTextPostForm);









// import React from 'react';
// import { connect } from 'react-redux';
// import { createPost, createPhotoPost, createVideoPost, createAudioPost } from '../../../actions/post_actions';
// import { closeModal } from '../../../actions/modal_actions';


// class CreateTextPostForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user_id: props.currentUser.id,
//             username: props.currentUser.username,
//             title: "",
//             body: "",
//             source: "",
//             source_alias: "",
//             link: "",
//             link_alias: "",
//             image_url: "",
//             video_url: "",
//             html: "",
//             root_post_id: "",
//             parent_post_id: "",
//             post_type: props.formType,
//             private: false,
//             attached_photos: null,
//             photo_file: null,
//             photo_url: null
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleFile = this.handleFile.bind(this);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     // handleFile(e) {
//     //     this.setState({
//     //         attached_photos: e.currentTarget.files[0]
//     //     });
//     // }
//     handleFile(e) {
//         e.preventDefault();
//         const file = e.currentTarget.files[0];
//         const fileReader = new FileReader();
//         fileReader.onloadend = () => {
//             this.setState({ photo_file: file, photo_url: fileReader.result });
//         };

//         if (file) {
//             fileReader.readAsDataURL(file);
//         };

//     }

//     handleSubmit(e) {
//         // e.preventDefault();
//         // const formData = new FormData();
//         // formData.append('post[user_id]', this.state.user_id);
//         // formData.append('post[username]', this.state.username);
//         // formData.append('post[title]', this.state.title);
//         // formData.append('post[body]', this.state.body);
//         // formData.append('post[source]', this.state.source);
//         // formData.append('post[source_alias]', this.state.source_alias);
//         // formData.append('post[link]', this.state.link);
//         // formData.append('post[link_alias]', this.state.link_alias);
//         // formData.append('post[image_url]', this.state.image_url);
//         // formData.append('post[video_url]', this.state.video_url);
//         // formData.append('post[html]', this.state.html);
//         // formData.append('post[root_post_id]', this.state.root_post_id);
//         // formData.append('post[parent_post_id]', this.state.parent_post_id);
//         // formData.append('post[post_type]', this.state.post_type);
//         // formData.append('post[private]', this.state.private);
//         // formData.append('post[created_at]', this.state.created_at);
//         // formData.append('post[updated_at]', this.state.updated_at);
//         // formData.append('post[attached_photos]', this.state.attached_photos);

//         // $.ajax({
//         //     method: 'post',
//         //     url: `/api/posts`,
//         //     data: formData,
//         //     contentType: false,
//         //     processData: false,
//         //     error: err => console.log(err),
//         // });
//         const post = Object.assign({}, this.state);
//         this.props.createPost(post);
//         this.props.closeModal();
//     }

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     render() {
//         console.log(this.state);
//         const preview = this.state.photo_url ? <img src={this.state.photo_url} className="preview" /> : null;
//         return (
//             <div className="post-form-container">

//                 <form className="post-form" onSubmit={this.handleSubmit}>

//                     <div className="current-user">{this.props.currentUser.username} <i className="fas fa-chevron-down"></i></div>

//                     <div>
//                         <input type="user_id"
//                             value={this.state.user_id}
//                             onChange={this.update('user_id')}
//                             className="post-form-input"
//                             placeholder={this.state.user_id}
//                             type="hidden"
//                         />
//                     </div>

//                     <div>
//                         <input type="username"
//                             value={this.state.username}
//                             onChange={this.update('username')}
//                             className="post-form-input"
//                             placeholder={this.state.username}
//                             type="hidden"
//                         />
    
//                     </div>

//                     <div>
//                         <input type="image_url"
//                             value={this.state.image_url}
//                             onChange={this.update('image_url')}
//                             className="post-form-input image_url"
//                         />
//                         <div className="caption">Add photo</div>
//                     </div>

//                     <div>
//                         <input type="file" 
//                             onChange={this.handleFile.bind(this)} 
//                             multiple="multiple"/>
//                     </div>

//                     {preview}

//                     <div>
//                         <input type="source"
//                             value={this.state.source}
//                             onChange={this.update('source')}
//                             className="post-form-input post-source"
//                             placeholder="Source"
//                         />
//                     </div>

//                     <div>
//                         <input type="source_alias"
//                             value={this.state.source_alias}
//                             onChange={this.update('source_alias')}
//                             className="post-form-input source_alias"
//                             placeholder="Source alias"
//                         />
//                     </div>

//                     <div>
//                         <input type="tags"
//                             value={this.state.tags}
//                             className="post-form-input tags"
//                             placeholder="#tags"
//                         />
//                     </div>

//                     <div className="modal-click">

//                         <button className="close-button"
//                             onClick={this.props.closeModal}>
//                             <div className="unselected">Close</div>
//                         </button>

//                         <button className="post-button" type="submit">
//                             <div className="unselected">Post</div>
//                         </button>

//                     </div>



//                 </form>

//             </div>
//         )
//     }

// }

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.id],
//     errors: state.errors.session,
//     formType: 'text'
// })

// const mapDispatchToProps = dispatch => ({
//     createPost: post => dispatch(createPost(post)),
//     closeModal: () => dispatch(closeModal()),
//     // createPhotoPost: post => dispatch(createPhotoPost(post)),
//     // createVideoPost: post => dispatch(createVideoPost(post)),
//     // createAudioPost: post => dispatch(createAudioPost(post))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CreateTextPostForm);

import React from "react";
import { connect } from "react-redux";
import {
  createPost,
  createPhotoPost,
  createVideoPost,
  createAudioPost
} from "../../../actions/post_actions";
import { createTag, deleteTag } from "../../../actions/tag_actions";
import { closeModal } from "../../../actions/modal_actions";

class CreatePhotoPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.currentUser.id,
      username: props.currentUser.username,
      title: "",
      body: "",
      source: "",
      source_alias: "",
      link: "",
      link_alias: "",
      image_url: "",
      video_url: "",
      html: "",
      root_post_id: "",
      parent_post_id: "",
      post_type: props.formType,
      private: false,
      tags: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    const post = Object.assign({}, this.state);
    this.props
      .createPost(post)
      .then(action =>
        this.props.createTag(action.post.id, {
          post_id: action.post.id,
          tag_body: this.state.tags
        })
      );
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <div className="current-user">
            {this.props.currentUser.username}{" "}
            <i className="fas fa-chevron-down"></i>
          </div>

          <div>
            <input
              type="user_id"
              value={this.state.user_id}
              onChange={this.update("user_id")}
              className="post-form-input"
              placeholder={this.state.user_id}
              type="hidden"
            />
          </div>

          <div>
            <input
              type="username"
              value={this.state.username}
              onChange={this.update("username")}
              className="post-form-input"
              placeholder={this.state.username}
              type="hidden"
            />
          </div>

          <div>
            <input
              type="image_url"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              className="post-form-input image_url"
            />
            <div className="caption">Add photo</div>
          </div>

          <div>
            <input
              type="source"
              value={this.state.source}
              onChange={this.update("source")}
              className="post-form-input post-source"
              placeholder="Source"
            />
          </div>

          <div>
            <input
              type="source_alias"
              value={this.state.source_alias}
              onChange={this.update("source_alias")}
              className="post-form-input source_alias"
              placeholder="Source alias"
            />
          </div>

          <div>
            <input
              type="tags"
              value={this.state.tags}
              onChange={this.update("tags")}
              className="post-form-input tags"
              placeholder="#tags"
            />
          </div>

          <div className="modal-click">
            <button className="close-button" onClick={this.props.closeModal}>
              <div className="unselected">Close</div>
            </button>

            <button className="post-button" type="submit">
              <div className="unselected">Post</div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  formType: "text"
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal()),
  createTag: (postId, tag) => dispatch(createTag(postId, tag)),
  deleteTag: (postId, tag) => dispatch(deleteTag(postId, tag)),
  // createPhotoPost: post => dispatch(createPhotoPost(post)),
  // createVideoPost: post => dispatch(createVideoPost(post)),
  // createAudioPost: post => dispatch(createAudioPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhotoPostForm);