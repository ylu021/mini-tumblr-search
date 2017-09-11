import React, {Component} from 'react';
import {SearchResultDummy as SearchResult} from '../../components/SearchResult';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

const mockResult = [
  {
    id: 1,
    image: 'http://image.jpg',
    url: 'http://tumblritem.com/item/1'
  },
  {
    id: 2,
    image: 'http://image2.jpg',
    url: 'http://tumblritem.com/item/2'
  }
];

describe('<SearchResult />', () => {
  it('should correctly renders loading at fetching state', () => {
    const tree = renderer.create(<SearchResult fetching={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should correctly renders null when no posts are find', () => {
    const tree = renderer.create(<SearchResult fetching={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should correctly renders the posts', () => {
    const tree = renderer.create(<SearchResult fetching={false} posts={mockResult} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
