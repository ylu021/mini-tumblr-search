// eslint-disable-next-line import/no-unassigned-import
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles.scss';
// eslint-disable-next-line import/no-unassigned-import
import 'whatwg-fetch';

const store = configureStore();

render(
  <Provider store={store}>
    <div className={styles.container}>
      Hello world
    </div>
  </Provider>,
  document.querySelector('[data-react-app]')
);
