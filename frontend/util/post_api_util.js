export const fetchPosts = () => (
    $.ajax({
        method: 'get',
        url: `/api/posts`,
        error: err => console.log(err),
    })
);

export const fetchPost = postId => (
    $.ajax({
        method: 'get',
        url: `/api/posts/${postId}`,
        error: err => console.log(err),
    })
);

export const createPost = post => (
    $.ajax({
        method: 'post',
        url: `/api/posts`,
        data: { post },
        error: err => console.log(err),
    })
);

export const updatePost = post => (
    $.ajax({
        method: 'patch',
        url: `api/posts/${post.id}`,
        data: { post },
        error: err => console.log(err),
    })
);

export const deletePost = postId => (
    $.ajax({
        method: 'delete',
        url: `api/posts/${postId}`,
        error: err => console.log(err),
    })
);

// export const fetchLikedPosts = userId => (
//     $.ajax({
//         method: 'get',
//         url: `/api/users/${userId}/likes`,
//         error: err => console.log(err)
//     })
// );

export const fetchOwnPosts = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}/posts`,
        error: err => console.log(err),
    })
);
