import { connect } from 'react-redux';
import MovieList from '../prescomponents/MovieList';

const searchEngie = (movie, search) => {
  const searchedValue = movie.filter(element => element.title.indexOf(search) >= 0);
  return searchedValue;
};

const sortList = (movie, sort) => {
  if (sort === 1) {
    const sortedList = movie.sort(function(a, b) {
      let  dateA = new Date(a.release_date);
      let dateB = new Date(b.release_date)
      return dateA - dateB;
    });
    return sortedList;
  } else {
    return movie;
  }
};

const mapStateToProps = (state) => {
  return {
    theMovieList: sortList(searchEngie(state.movie, state.searchReducer), state.sortReducer),
  };
};

const VisibleMovieList = connect(mapStateToProps, null)(MovieList);

export default VisibleMovieList;
