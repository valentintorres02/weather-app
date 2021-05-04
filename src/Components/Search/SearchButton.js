import React from 'react';
import PropTypes from 'prop-types';

function SearchButton({ fetching }) {
  return (
    <button className="btn btn-primary" onClick={() => fetching()} type="submit">Search</button>
  );
}

SearchButton.propTypes = {
  fetching: PropTypes.func.isRequired,
};

export default SearchButton;
