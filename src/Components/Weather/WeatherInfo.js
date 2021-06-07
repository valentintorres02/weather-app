import React from 'react';
import PropTypes from 'prop-types';
import WeatherCity from './columns/WeatherCity';
import WeatherTemp from './columns/WeatherTemp';
import WeatherType from './columns/WeatherType';
import WeatherDate from './columns/WeatherDate';

function WeatherInfo({ weatherData, date }) {
  return (
    <div>
      <WeatherCity city={weatherData.name} country={weatherData.sys.country} />
      <WeatherTemp temp={weatherData.main.temp} />
      <WeatherType type={weatherData.weather[0].main} />
      <WeatherDate date={date} />
    </div>
  );
}

WeatherInfo.propTypes = {
  date: PropTypes.func.isRequired,
  weatherData: PropTypes.instanceOf(Array),
};

WeatherInfo.defaultProps = {
  weatherData: [],
};

export default WeatherInfo;
