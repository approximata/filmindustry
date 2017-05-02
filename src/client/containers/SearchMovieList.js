import { connect } from 'react-redux';
import { setSearchFilter } from '../actions';
import SearchFilter from '../prescomponents/SearchFilter';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchFilter(event.target.value));
    },
  };
};

const SearchMovieList = connect(null, mapDispatchToProps)(SearchFilter);

export default SearchMovieList;
