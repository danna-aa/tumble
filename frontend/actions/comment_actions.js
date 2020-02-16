import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// actions
export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = (postId, comment) => dispatch =>
  CommentAPIUtil.createComment(postId, comment).then(comment => dispatch(receiveComment(comment)));

  
export const deleteComment = (postId, comment) => dispatch =>
  CommentAPIUtil.deleteComment(postId, comment.id).then(() =>
    dispatch(removeComment(comment))
  );
