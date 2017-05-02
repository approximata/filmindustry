import React, { PropTypes } from 'react';
import { Col, Button, Thumbnail } from 'react-bootstrap';

const Movie = ({ title, poster_path, overview, release_date, backdrop_path }) => (
  <Col xs={8} sm={5} md={4}>
    <Thumbnail src={poster_path} alt="thmb">
      <h4>{title}</h4>
      <p>overview: {overview}</p>
      <small>release_date: {release_date} </small>
      <a href={backdrop_path}>
        <Button bsStyle="info" bsSize="xsmall">backdrop_path</Button>
      </a>
    </Thumbnail>
  </Col>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
};

export default Movie;
