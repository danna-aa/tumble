import * as FollowAPIUtil from "../util/follow_api_util";
import logger from "redux-logger";

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

// actions
export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

// thunk actions
export const fetchFollows = () => dispatch =>
  FollowAPIUtil.fetchFollows().then(follows => dispatch(receiveFollows(follows)));

export const fetchFollow = followId => dispatch =>
  FollowAPIUtil.fetchFollow(followId).then(follow => dispatch(receiveFollow(follow)));

export const follow = creator_id => dispatch =>
  FollowAPIUtil.follow(creator_id).then(follow => dispatch(receiveFollow(follow)));

export const unfollow = followId => dispatch =>
  FollowAPIUtil.unfollow(followId).then(() => dispatch(removeFollow(followId)));
