import React from 'react';
import Header from './prescomponents/Header';
import VisibleMovieList from './containers/VisibleMovieList';
import SearchMovieList from './containers/SearchMovieList';
import SortMovieList from './containers/SortMovieList';


const App = () => (
  <div className="app">
    <Header />
    <SearchMovieList />
    <SortMovieList />
    <VisibleMovieList />
  </div>
);

export default App;
