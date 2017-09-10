import {types} from '../actions/posts';

const {
  ERROR_REQUESTING_POSTS,
  RECEIVED_POSTS,
  REQUESTING_POSTS
} = types;

export const initialState = {
  err: null,
  fetching: false,
  posts: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
  case ERROR_REQUESTING_POSTS:
    return {
      ...state,
      err: action.payload.err
    };
  case RECEIVED_POSTS:
    return {
      ...state,
      fetching: false,
      posts: action.payload.posts
    };
  case REQUESTING_POSTS:
    return {
      ...state,
      fetching: true,
      posts: null
    };
  default:
    return state;
  }
};

export default posts;
