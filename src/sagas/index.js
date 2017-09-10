import {fork} from 'redux-saga';
import posts from './posts';

export default function *sagas () {
  yield [
    fork(posts)
  ];
}
