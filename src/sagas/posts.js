import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {searchImg} from '../apis/posts';
import {
  errorRequestingPosts,
  receivedPosts,
  types
} from '../actions/posts';

export const fetchFromTumblr = function *(action) {
  try {
    const {payload: {query}} = action;
    const receivedImgs = yield call(searchImg, query);

    yield put(receivedPosts(receivedImgs));
  } catch (error) {
    yield put(errorRequestingPosts(error));
  }
};

const watchRequestingPosts = function *() {
  yield takeLatest(types.REQUESTING_POSTS, fetchFromTumblr);
};

export default function *posts () {
  yield [
    fork(watchRequestingPosts)
  ];
}
