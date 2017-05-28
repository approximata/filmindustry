import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieApp from './reducers';
import App from './App';
import { moviesData } from './actions';
require('./main.css');

/* eslint-disable no-underscore-dangle */

let store = createStore(movieApp, /* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
);

store.dispatch(moviesData('popularity.desc', 1, store.dispatch));
