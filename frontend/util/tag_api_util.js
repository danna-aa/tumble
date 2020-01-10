export const createTag = (postId, tag) => {
  return $.ajax({
    method: "post",
    url: `/api/posts/${postId}/tags`,
    data: { tag },
    error: err => console.log(err)
  });
};

export const deleteTag = (postId, tagId) => {
  return $.ajax({
    method: "delete",
    url: `api/posts/${postId}/tags/${tagId}`,
    error: err => console.log(err)
  });
};
