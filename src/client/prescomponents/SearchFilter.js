import React, { PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';


const SearchFilter = ({ onSearchChange }) => {
  let input;

  return (
    <form>
      <FormGroup bsSize="large">
        <FormControl type="text" placeholder="search"
        ref={node => {
          input = node;
        }}
        onChange={onSearchChange}/>
      </FormGroup>
    </form>
  );
};

SearchFilter.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};


export default SearchFilter;
