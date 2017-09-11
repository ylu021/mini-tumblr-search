// eslint-disable-next-line import/no-unassigned-import
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles.scss';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
// eslint-disable-next-line import/no-unassigned-import
import 'whatwg-fetch';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <div className={styles.inputcontainer}><SearchInput /></div>
      <div className={styles.searchresultcontainer}><SearchResult /></div>
    </div>
  </Provider>,
  document.querySelector('[data-react-app]')
);
