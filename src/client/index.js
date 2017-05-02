import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieApp from './reducers';
import App from './App';
import { moviesData } from './actions';
require('./main.css');


let store = createStore(movieApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
);

store.dispatch(moviesData(store.dispatch));
