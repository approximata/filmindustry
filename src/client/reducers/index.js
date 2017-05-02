import { combineReducers } from 'redux';
import movie from './movies';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';

const movieApp = combineReducers({
  movie,
  searchReducer,
  sortReducer,
});

export default movieApp;
