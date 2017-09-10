import nock from 'nock';

const mockResponse = {
  link: 'http://whatever',
  image: 'https://distillery.s3.amazonaws.com/media/whatever.jpg'
};
const query = 'snowflakes';

describe('posts apis', () => {
  it('http request should be 200', async () => {
    const scope = nock('https://api.tumblr.com')
      .get('/v2/tagged')
      .query({tag: query,
        api_key: process.env.ACCESS_TOKEN})
      .reply(200, mockResponse);

    nock.isDone();
  });
});
