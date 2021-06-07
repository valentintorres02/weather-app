import React from 'react';
import PropTypes from 'prop-types';
import { formatTemp } from '../../../constants/constants';

function WeatherTemp({ temp }) {
  const formattedTemp = formatTemp(temp);
  return (
    <>
      <p>
        {`${formattedTemp}°`}
      </p>
    </>
  );
}

WeatherTemp.propTypes = {
  temp: PropTypes.string,
};

WeatherTemp.defaultProps = {
  temp: '',
};

export default WeatherTemp;
