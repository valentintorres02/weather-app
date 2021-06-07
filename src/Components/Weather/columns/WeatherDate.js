import React from 'react';
import PropTypes from 'prop-types';

function WeatherDate({ date }) {
  return (
    <p>
      {date}
    </p>
  );
}

WeatherDate.propTypes = {
  date: PropTypes.string,
};

WeatherDate.defaultProps = {
  date: '',
};

export default WeatherDate;
