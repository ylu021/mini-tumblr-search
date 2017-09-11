import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestingPosts} from '../../actions/posts';
import styles from './styles.scss';

const SubmitButton = ({dispatch, fetching, query}) => {
  const handleSubmit = () => dispatch(requestingPosts(query));

  return (
    <button
      className={styles.submitbutton}
      disabled={fetching || !query}
      onClick={!fetching && handleSubmit}
    >
      Search
    </button>
  );
};

SubmitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  query: PropTypes.string
};

SubmitButton.defaultProps = {
  query: null
};

const mapStateToProps = (state) => ({
  fetching: state.posts.fetching
});

export {SubmitButton as SubmitButtonDummy};
export default connect(mapStateToProps)(SubmitButton);
