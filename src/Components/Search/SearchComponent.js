import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { API_WEB, API_KEY } from '../../constants/constants';
import SearchInput from './SearchInput';

function Search({ date }) {
  Search.propTypes = {
    date: PropTypes.func.isRequired,
  };

  const [search, setSearch] = useState('');
  const [data, setData] = useState({});

  const fetching = () => {
    fetch(`${API_WEB}weather?q=${search}&appid=${API_KEY}`)
      .then((r) => r.json())
      .then((r) => { setData(r); setSearch(''); });
  };

  const kelvinToCelsius = (degrees) => degrees - 273.1;

  return (
    <div className="search-data">
      <SearchInput search={search} setSearch={setSearch} fetching={fetching} />
      {(typeof data.main !== 'undefined') ? (

        <div>
          <p>
            {data.name}
            ,
            {' '}
            {data.sys.country}
          </p>
          <p>
            {kelvinToCelsius(data.main.temp).toFixed(2)}
            °
          </p>
          <p>{data.weather[0].main}</p>
          <p>
            {date}
          </p>
        </div>
      ) : ('')}
    </div>
  );
}

export default Search;
