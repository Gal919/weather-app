import React from 'react';
import { useSelector } from 'react-redux';
import Info from './Info';

const TodayForecast = () => {
  const todayForecast = useSelector(state => state.forecast.todayForecast);
  const isLoading = useSelector(state => state.forecast.isLoading);
  const error = useSelector(state => state.forecast.error);
  
  return (
    <div>
      {isLoading && <h3>Is Loading</h3>}
      {!isLoading && todayForecast && !error && (
        <>
          <h3>TODAY'S FORECAST</h3>
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
    </div>
  );
};

export default TodayForecast;
