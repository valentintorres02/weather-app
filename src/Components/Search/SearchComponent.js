import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { API_WEB, API_KEY } from '../../constants/constants';
import SearchInput from './SearchInput';
import WeatherInfo from '../Weather/WeatherInfo';

function Search({ date }) {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const fetching = () => {
    fetch(`${API_WEB}weather?q=${search}&appid=${API_KEY}`)
      .then((r) => r.json())
      .then((r) => { setWeatherData(r); setSearch(''); });
  };

  return (
    <div className="search-data">
      <SearchInput search={search} setSearch={setSearch} fetching={fetching} />
      {(typeof weatherData.main !== 'undefined') ? (
        <WeatherInfo weatherData={weatherData} date={date} />
      ) : ('')}
    </div>
  );
}

Search.propTypes = {
  date: PropTypes.func.isRequired,
};

export default Search;
