import json from './drft.json';


export const moviesLoaded = (movie) => {
  return {
    type: 'MOVIES_LOADED',
    movie,
  };
};

export const moviesData = (dispatch) => {
  return dispatch(moviesLoaded(json.results));
};

// export const moviesData = (dispatch) => {
//   const myInit = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     mode: 'no-cors',
//     cache: 'default' };
//     const myRequest = '';
//     fetch(myRequest, myInit)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         dispatch(moviesLoaded(data));
//       });
//
//   return {
//     type: 'MOVIES_LOADING',
//   };
// };


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
