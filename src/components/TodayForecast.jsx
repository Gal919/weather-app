import React from 'react';
import { useSelector } from 'react-redux';
import Info from './Info';
import { Container } from './styles/TodayForecast';

const TodayForecast = () => {
  const todayForecast = useSelector(state => state.forecast.todayForecast);
  const isLoading = useSelector(state => state.forecast.isLoading);
  const error = useSelector(state => state.forecast.error);
  
  return (
    <Container>
      {!isLoading && todayForecast && !error && (
        <>
          {todayForecast.list.map((item) => (
            <Info
              key={item.dt}
              date={item.dt_txt}
              temp={item.main.temp}
              img={item.weather[0].icon}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default TodayForecast;
