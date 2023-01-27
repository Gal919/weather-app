import React from 'react';
import { useSelector } from 'react-redux';

const CurrentForecast = () => {
  const currentForecast = useSelector(state => state.forecast.currentCondition);
  const {name, main: {temp}, weather : [iconArr]} = currentForecast;
  const {icon} = iconArr;

  return (
    <div className='current-forecast-container'>
      <h1 className='name'>{name}</h1>
      <h3 className='temp'>{temp}</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon'/>
    </div>
  );
};

export default CurrentForecast;
