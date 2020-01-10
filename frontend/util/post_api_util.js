

export const fetchPosts = ( filter ) => (
    $.ajax({
        method: 'get',
        url: `/api/posts`,
        error: err => console.log(err),
        data: { filter }
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

export const createPhotoPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: post,
        processData: false,
        contentType: false
    });
};
export const createAudioPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: post,
        processData: false,
        contentType: false
    });
};
export const createVideoPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: post,
        processData: false,
        contentType: false
    });
};

// export const fetchLikedPosts = userId => (
//     $.ajax({
//         method: 'get',
//         url: `/api/users/${userId}/likes`,
//         error: err => console.log(err)
//     })
// );

// export const search = filter => {
//     return $.ajax({
//         url: `/api/posts?filter=${filter}`,
//         method: `GET`,
//         data: { filter }
//     });
// };