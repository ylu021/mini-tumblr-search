import React from 'react';
import {requestingPosts} from '../../actions/posts';
import {SubmitButtonDummy as SubmitButton} from '../../components/SubmitButton';
import {shallow} from 'enzyme';

const query = 'cat';

describe('<SubmitButton />', () => {
  it('should disabled button click when SearchInput query is empty', () => {
    const button = shallow(<SubmitButton dispatch={jest.fn()} fetching={false} />);

    expect(button.prop('disabled')).toBe(true);
  });

  it('should allow button click when SearchInput query is not empty', () => {
    const button = shallow(
      <SubmitButton
        dispatch={jest.fn()}
        fetching={false}
        query={query}
      />);

    expect(button.prop('disabled')).toBe(false);
  });

  it('should disabled button click when state is fetching', () => {
    const dispatch = jest.fn();
    const button = shallow(
      <SubmitButton
        dispatch={dispatch}
        fetching={true}
      />);

    expect(button.prop('disabled')).toBe(true);
    button.simulate('click');
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('should dispatches requestingPosts action when button is clicked', () => {
    const dispatch = jest.fn();
    const button = shallow(
      <SubmitButton
        dispatch={dispatch}
        fetching={false}
        query={query}
      />);

    expect(button.prop('disabled')).toBe(false);
    button.simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(requestingPosts(query));
  });
});
