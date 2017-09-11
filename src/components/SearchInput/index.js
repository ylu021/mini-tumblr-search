import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestingPosts} from '../../actions/posts';
import SubmitButton from '../SubmitButton';
import styles from './styles.scss';

class SearchInput extends Component {
  state = {
    query: null
  };

  constructor (props) {
    super(props);
  }

  render () {
    const {query} = this.state;

    return (
      <div>
        <h1 className={styles.title}>Most Recent Tumblr gifs</h1>
        <form>
          <input
            className={styles.searchinput}
            name={'query'}
            onChange={
              (e) => this.setState({
                query: e.target.value
              })
            }
            placeholder={'e.g. cute cat'}
            type={'text'}
          />
          <SubmitButton query={query} />
        </form>
      </div>
    );
  }
}

export {SearchInput as SearchInputDummy};
export default SearchInput;
