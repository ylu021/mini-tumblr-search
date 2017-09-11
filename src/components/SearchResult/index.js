import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const SearchResult = ({posts, fetching}) => {
  if (fetching) {
    return <p>Loading</p>;
  }

  if (!posts) {
    return <p />;
  }

  return (
    <div>
      <h1>Image result from Tumblr</h1>
      <ul>
        {
          posts.map(({id, image, url}) =>
            <li key={id}>
              <img src={image} />
              <a
                href={url}
                target='_blank'
              >
                {'source'}
              </a>
            </li>
          )
        }
      </ul>
    </div>
  );
};

SearchResult.propTypes = {
  fetching: PropTypes.bool.isRequired,
  posts: PropTypes.array
};

SearchResult.defaultProps = {
  posts: null
};

const mapStateToProps = (state) => ({
  fetching: state.posts.fetching,
  posts: state.posts.posts
});

export {SearchResult as SearchResultDummy};
export default connect(mapStateToProps)(SearchResult);
