import {errorRequestingPosts, receivedPosts, requestingPosts} from '../../actions/posts';
import postsReducer, {initialState} from '../../reducers/posts';

const mockResponse = {
  link: 'http://whatever',
  image: 'https://distillery.s3.amazonaws.com/media/whatever.jpg'
};

const query = 'snowflakes';

describe('posts reducers', () => {
  it('error requesting posts', () => {
    const err = new Error('error requesting posts');
    const action = errorRequestingPosts(err);

    expect(postsReducer(initialState, errorRequestingPosts(err)).err).toBe(err);
  });

  it('requesting posts in the process', () => {
    const action = receivedPosts([mockResponse]);

    const stateWithFetching = {
      ...initialState,
      fetching: true
    };

    const newstate = postsReducer(stateWithFetching, action);

    expect(newstate.fetching).toBe(false);
    expect(newstate.posts).toEqual([mockResponse]);
  });

  it('requesting posts in process, should empty posts', () => {
    const action = requestingPosts(query);
    const stateWithPosts = {
      ...initialState,
      fetching: false,
      posts: [mockResponse]
    };
    const newstate = postsReducer(stateWithPosts, action);

    expect(newstate.fetching).toBe(true);
    expect(newstate.posts).toBe(null);
  });
});
