import React from 'react';
import { useSelector } from 'react-redux';
import Info from './Info';

const TodayForecast = () => {
  const todayForecast = useSelector(state => state.forecast.todayForecast);
  const {list} = todayForecast;
  
  return <div>
    <h3>TODAY'S FORECAST</h3>
    {list.map(item => <Info key={item.dt} date={item.dt_txt} temp={item.main.temp} img={item.weather[0].icon}/>)}
    

  </div>;
};

export default TodayForecast;
