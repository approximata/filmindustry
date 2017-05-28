import React, { PropTypes } from 'react';
import Movie from './Movie';
import { Grid, Row } from 'react-bootstrap';


const MovieList = ({ theMovieList }) => (
  <Grid className="grid">
    <Row key>
    {theMovieList.map(movie =>
      <Movie
        key={movie.id}
        {...movie}
      />
      )}
    </Row>
  </Grid>
);

MovieList.propTypes = {
  theMovieList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default MovieList;
