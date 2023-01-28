import React from 'react';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { Container, ResContiner, LeftSide, RightSide } from './styles/CurrentForecast';

const CurrentForecast = () => {
  const currentForecast = useSelector(state => state.forecast.currentCondition);
  const isLoading = useSelector(state => state.forecast.isLoading);
  const error = useSelector(state => state.forecast.error);

  return (
    <Container>
      {isLoading && (
        <ReactLoading type='bubbles' color='#5b5b5b' height={64} width={64} />
      )}
      {error && <p>{error}</p>}
      {!isLoading && currentForecast && !error && (
        <ResContiner>
          <LeftSide>
            <h1>{currentForecast.name}</h1>
            <p>{currentForecast.weather[0].description}</p>
            <h3>
              {Math.floor(currentForecast.main.temp)} {'\u00b0'}
            </h3>
          </LeftSide>
          <RightSide>
            <img
              src={`http://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@4x.png`}
              alt='weather-icon'
            />
          </RightSide>
        </ResContiner>
      )}
    </Container>
  );
};

export default CurrentForecast;
