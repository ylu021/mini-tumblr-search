export const types = {
  ERROR_REQUESTING_POSTS: 'ERROR_REQUESTING_POSTS',
  RECEIVED_POSTS: 'RECEIVED_POSTS',
  REQUESTING_POSTS: 'REQUESTING_POSTS'
};

export const errorRequestingPosts = (err) => ({
  payload: {
    err
  },
  type: types.ERROR_REQUESTING_POSTS
});

export const receivedPosts = (posts) => ({
  payload: {
    posts
  },
  type: types.RECEIVED_POSTS
});

export const requestingPosts = (query) => ({
  payload: {
    query
  },
  type: types.REQUESTING_POSTS
});
