import { UPDATE_CURRENT_CONDITION, UPDATE_TODAY_FORECAST } from './forecastActionTypes';
const apiKey = '787ef6979c61d6b7319baed8a67fff72';

export const updateCurrentCondition = (city) => async (disptch) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
   
    disptch({
      type: UPDATE_CURRENT_CONDITION,
      payload: data,
    });
  };


export const  updateTodayForecast = (city) => async (disptch) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=6&appid=${apiKey}`
    );
    const data = await res.json();

    disptch({
      type: UPDATE_TODAY_FORECAST,
      payload: data,
    });
  };
