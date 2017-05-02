'use strict';

const initMovieList = [
  { poster_path: '/unPB1iyEeTBcKiLg8W083rlViFH.jpg',
    adult: false,
    overview: 'A story about how a new baby\'s arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim.',
    release_date: '2017-03-23',
    genre_ids: [ 16, 35, 10751 ],
    id: 295693,
    original_title: 'The Boss Baby',
    original_language: 'en',
    title: 'The Boss Baby',
    backdrop_path: '/bTFeSwh07oX99ofpDI4O2WkiFJ.jpg',
    popularity: 112.620153,
    vote_count: 842,
    video: false,
    vote_average: 5.6 }
]

const movie = (state = initMovieList, action) => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return Object.keys(action.movie).reduce((prev, key) => prev.concat(action.movie[key]), []);
    default:
      return state;
  }
};


export default movie;
