import React from 'react';
import PropTypes from 'prop-types';

function WeatherType({ type }) {
  return (
    <p>
      {type}
    </p>
  );
}

WeatherType.propTypes = {
  type: PropTypes.string,
};

WeatherType.defaultProps = {
  type: '',
};

export default WeatherType;
