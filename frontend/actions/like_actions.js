import * as LikeAPIUtil from "../util/like_api_util";
// import { receivePost } from "../util/post_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

// actions
export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const likePost = (post, userId) => dispatch => (
  LikeAPIUtil.likePost(post, userId)
    .then(like => dispatch(receiveLike(like)))
);

export const unlikePost = (postId, like) => dispatch => (
  LikeAPIUtil.unlikePost(postId, like.id)
    .then(() => dispatch(removeLike(like)))
);
