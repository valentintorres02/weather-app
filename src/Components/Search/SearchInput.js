import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';

function SearchInput({ search, setSearch, fetching }) {
  return (
    <div>
      <form className="form-inline search-box" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchButton fetching={fetching} />
        </div>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired,
  fetching: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  search: '',
};

export default SearchInput;
