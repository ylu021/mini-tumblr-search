import React, {Component} from 'react';
import {requestingPosts} from '../../actions/posts';
import {SubmitButtonDummy as SubmitButton} from '../../components/SubmitButton';
import {SearchInputDummy as SearchInput} from '../../components/SearchInput';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

const query = 'cat';

describe('<SearchInput />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<SearchInput />);
  });
  it('should correctly renders nested component', () => {
    expect(component).toMatchSnapshot();
  });
});
