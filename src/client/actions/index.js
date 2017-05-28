import {loadRequestedData, key} from '../api/LoadRequestedData';

export const moviesLoaded = (movie) => {
  return {
    type: 'MOVIES_LOADED',
    movie,
  };
};

export const moviesData = (sort_by = 'popularity.desc', page = 1, dispatch) => {
  const myInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
    mode: 'cors',
    cache: 'default' };
    const myRequest = `https://api.themoviedb.org/3/discover/movie?page=${page}&include_video=false&include_adult=false&sort_by=${sort_by}&language=en-US&api_key=${key}`;

    fetch(myRequest, myInit)
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          return;
        }
        response.json().then(function(data) {
          console.log('dispatch' + data);
          dispatch(moviesLoaded(data));
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  return {
    type: 'MOVIES_LOADING',
  };
};

export const setSearchFilter = (filter) => {
  return {
    type: 'SET_SEARCH_VISIBILITY',
    filter,
  };
};

export const setSort = (value) => {
  return {
    type: 'SET_SORT',
    value,
  };
};
