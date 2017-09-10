import path from 'path';
import {config} from 'dotenv';

config({
  path: path.resolve('../../.env')
});

export const searchImg = async (query) => {
  const token = process.env.ACCESS_TOKEN;

  const endpoint = `https://api.tumblr.com/v2/tagged?tag=${query}&api_key=${token}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  if (response.status < 200 || response.status >= 400) {
    const err = new Error(data && data.message);

    err.response = response;
    throw err;
  }

  return data.response.map(({short_url, photos}) => ({
    link: short_url,
    image: photos[0].original_size.url
  }));
};
