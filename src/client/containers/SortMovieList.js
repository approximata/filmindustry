import { connect } from 'react-redux';
import { setSort } from '../actions';
import SortFilter from '../prescomponents/SortFilter';

const mapDispatchToProps = (dispatch) => {
  return {
    sortDate: (event) => {
      dispatch(setSort(1));
    },
  };
};

const SortMovieList = connect(null, mapDispatchToProps)(SortFilter);

export default SortMovieList;
