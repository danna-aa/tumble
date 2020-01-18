export const fetchFollows = () =>
  $.ajax({
    method: "get",
    url: `/api/follows`,
    error: err => console.log(err),
  });

export const fetchFollow = followId =>
  $.ajax({
    method: "get",
    url: `/api/follows/${followId}`,
    error: err => console.log(err)
  });

export const follow = creator_id => {
  return $.ajax({
    method: "post",
    url: `/api/follows`,
    data: { creator_id },
    error: err => console.log(err)
  });
};

export const unfollow = followId => {
  return $.ajax({
    method: "delete",
    url: `api/follows/${followId}`,
    error: err => console.log(err)
  });
};
