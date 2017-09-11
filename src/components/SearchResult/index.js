import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './styles.scss';

const SearchResult = ({posts, fetching}) => {
  if (fetching) {
    return <div><img src='https://loading.io/spinners/ellipsis/index.discuss-ellipsis-preloader.svg' /></div>;
  }

  if (!posts) {
    return <p className={styles.info}>Try a search above to see recent tumblr posts</p>;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.resultcontainer}>
        {
          posts.map(({id, image, url}, idx) => {
            const images = image.map((img, idx) =>
              <li
                className={styles.resultitem}
                key={id + idx}
              >
                <a
                  className={styles.source}
                  href={url}
                  target='_blank'
                >
                  <div
                    className={styles.imgcontainer}
                    key={'img' + idx}
                  >
                    <img className={styles.img} src={img.original_size.url} />
                  </div>
                </a>
              </li>
            );

            return images;
          })
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
