import React from 'react';
import { useSelector } from 'react-redux';

const CurrentForecast = () => {
  const currentForecast = useSelector(state => state.forecast.currentCondition);
  const isLoading = useSelector(state => state.forecast.isLoading);
  const error = useSelector(state => state.forecast.error);

  return (
    <div className="current-forecast-container">
      {isLoading && <h3>Is Loading</h3>}
      {!isLoading && currentForecast && !error && (
        <>
          <h1 className="name">{currentForecast.name}</h1>
          <h3 className="temp">{currentForecast.main.temp}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </>
      )}
    </div>
  );
};

export default CurrentForecast;
