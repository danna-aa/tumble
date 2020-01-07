import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import CreateTextPostForm from './../components/dashboard/create_post_forms/1_create_text_post_form';
import CreatePhotoPostForm from './../components/dashboard/create_post_forms/2_create_photo_post_form';
import CreateQuotePostForm from './../components/dashboard/create_post_forms/3_create_quote_post_form';
import CreateLinkPostForm from './../components/dashboard/create_post_forms/4_create_link_post_form';
import CreateChatPostForm from './../components/dashboard/create_post_forms/5_create_chat_post_form';
import CreateAudioPostForm from './../components/dashboard/create_post_forms/6_create_audio_post_form';
import CreateVideoPostForm from './../components/dashboard/create_post_forms/7_create_video_post_form';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'text':
            component = <CreateTextPostForm />
            break;
        case 'photo':
            component = <CreatePhotoPostForm />
            break;
        case 'quote':
            component = <CreateQuotePostForm />
            break;
        case 'link':
            component = <CreateLinkPostForm/>
            break;
        case 'chat':
            component = <CreateChatPostForm/>
            break;
        case 'audio':
            component = <CreateAudioPostForm/>
            break;
        case 'video':
            component = <CreateVideoPostForm/>
            break;
        default:
            return null;
    }
    return (
        <div className="translucent-background" onClick={closeModal}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);