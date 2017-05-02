import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';


const SortFilter = ( { sortDate } ) => {
  return (
    <div className="row">
      <nav className="col-sm-4">
        <Button bsStyle="success" bsSize="large" onClick={sortDate}>sort by date</Button>
      </nav>
    </div>
  );
};

SortFilter.propTypes = {
  sortDate: PropTypes.func.isRequired,
};


export default SortFilter;
