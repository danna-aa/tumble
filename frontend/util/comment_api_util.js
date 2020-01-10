export const createComment = (post, userId) => {
  return $.ajax({
    method: "post",
    url: `/api/posts/${post.id}/comments`,
    data: { post, userId },
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
