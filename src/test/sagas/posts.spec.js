import path from 'path';
import {config} from 'dotenv';
import {call, put} from 'redux-saga/effects';
import {errorRequestingPosts, receivedPosts, requestingPosts} from '../../actions/posts';
import {searchImg} from '../../apis/posts';
import {fetchFromTumblr} from '../../sagas/posts';

config({
  path: path.resolve('../../.env')
});

const mockResponse = {
  link: 'http://whatever',
  image: 'https://distillery.s3.amazonaws.com/media/whatever.jpg'
};

const query = 'snowflakes';
const requestAction = requestingPosts(query);

describe('posts sagas', () => {
  describe('tumblr search', () => {
    it('should put receivedPosts after fetching successfully', () => {
      // iterator return {done: bool, value: any}
      const iterator = fetchFromTumblr(requestAction);

      // first it should yield the call

      expect(iterator.next().value).toEqual(call(searchImg, query));

      // expect the mock received action to return the mock response we passed in
      expect(iterator.next(mockResponse).value).toEqual(put(receivedPosts(mockResponse)));

      // expect the iterator to be done
      expect(iterator.next().done).toBe(true);
    });

    it('should put errorRequestingPosts after fetching unsuccessfully', () => {
      const err = new Error('error fetching posts');
      const iterator = fetchFromTumblr(requestAction);

      expect(iterator.next().value).toEqual(call(searchImg, query));

      // throw error
      expect(iterator.throw(err).value).toEqual(put(errorRequestingPosts(err)));
      expect(iterator.next().done).toBe(true);
    });
  });
});
