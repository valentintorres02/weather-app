import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

function Search({ date }) {
  Search.propTypes = {
    date: PropTypes.func.isRequired,
  };

  const [search, setSearch] = useState('');
  const [data, setData] = useState({});

  const API_WEB = 'http://api.openweathermap.org/data/2.5/';
  const API_KEY = '90edfdd804711bd4864a9a0f55293bff';

  const fetching = () => {
    fetch(`${API_WEB}weather?q=${search}&appid=${API_KEY}`)
      .then((r) => r.json())
      .then((r) => { setData(r); setSearch(''); });
  };

  const kelvinToCelsius = (degrees) => degrees - 273.1;

  return (
    <div className="search-data">
      <div>
        <form className="form-inline search-box" onSubmit={(e) => e.preventDefault()}>
          <div>

            <input className="form-control" type="text" placeholder="Enter city name" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button className="btn btn-primary" onClick={() => fetching()} type="submit">Search</button>
          </div>
        </form>
      </div>
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
