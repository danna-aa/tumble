import * as TagAPIUtil from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

// actions
export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const createTag = (postId, tag) => dispatch =>
  TagAPIUtil.createTag(postId, tag).then(tag =>
    dispatch(receiveTag(tag))
  );

export const deleteTag = (postId, tag) => dispatch =>
  TagAPIUtil.deleteTag(postId, tag.id).then(() =>
    dispatch(removeTag(tag))
  );
