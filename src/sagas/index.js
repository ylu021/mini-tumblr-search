import {fork} from 'redux-saga/effects';
import posts from './posts';

export default function *sagas () {
  yield [
    fork(posts)
  ];
}
