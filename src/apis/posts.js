import path from 'path';

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

  const filteredOnlyPhotos = data.response.filter(
    ({photos}) => photos
  ).map(
    // eslint-disable-next-line id-match
    ({id, short_url, photos}) => ({
      id,
      url: short_url,
      image: photos
    })
  );

  return filteredOnlyPhotos;
};
