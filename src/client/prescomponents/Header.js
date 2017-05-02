import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => (
  <Jumbotron>
    <h1>The Movie Finder</h1>
    <p>This is a simple react redux Movie searcher with webpack server.</p>
    <a href="https://github.com/approximata/filmindustry"><Button bsStyle="primary">check in git</Button></a>
  </Jumbotron>
);

export default Header;
