export const createComment = (postId, comment) => {
  return $.ajax({
    method: "post",
    url: `/api/posts/${postId}/comments`,
    data: { comment },
    error: err => console.log(err)
  });
};

export const deleteComment = (postId, commentId) => {
  return $.ajax({
    method: "delete",
    url: `api/posts/${postId}/comments/${commentId}`,
    error: err => console.log(err)
  });
};
