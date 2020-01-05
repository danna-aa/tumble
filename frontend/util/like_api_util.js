export const likePost = (post, userId) => {
  return $.ajax({
    method: 'post',
    url: `/api/posts/${post.id}/likes`,
    data: { post, userId },
    error: err => console.log(err)
  });
};

export const unlikePost = (postId, likeId) => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${postId}/likes/${likeId}`,
    error: err => console.log(err)
  });
};
