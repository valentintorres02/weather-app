import React from 'react';
import PropTypes from 'prop-types';

function WeatherCity({ city, country }) {
  return (
    <>
      <p>
        {`${city}, ${country}`}
      </p>
    </>
  );
}

WeatherCity.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

WeatherCity.defaultProps = {
  city: '',
  country: '',
};

export default WeatherCity;
