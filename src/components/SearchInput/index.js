import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestingPosts} from '../../actions/posts';
import SubmitButton from '../SubmitButton';

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
      <form>
        <input
          name={'query'}
          onChange={
            (e) => this.setState({
              query: e.target.value
            })
          }
          type={'text'}
        />
        <SubmitButton query={query} />
      </form>
    );
  }
}

export {SearchInput as SearchInputDummy};
export default SearchInput;
