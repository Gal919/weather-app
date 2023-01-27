import { UPDATE_CURRENT_CONDITION, UPDATE_TODAY_FORECAST, UPDATE_IS_LOADING, SET_ERROR } from './forecastActionTypes';
const apiKey = '787ef6979c61d6b7319baed8a67fff72';

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const updateIsLoading = (isLoading) => {
  return {
    type: UPDATE_IS_LOADING,
    payload: isLoading,
  };
};

export const updateCurrentCondition = (city) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if(!response.ok) {
      throw new Error(setError('city not found'))
    }
   
    const data = await response.json();
  
    dispatch(updateIsLoading(false));
    dispatch({
      type: UPDATE_CURRENT_CONDITION,
      payload: data,
    });

  } catch (error) {
    dispatch(setError(error.message));
  };
};

export const  updateTodayForecast = (city) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=6&appid=${apiKey}`
    );

    if(!response.ok) {
      throw new Error(setError('city not found'))
    }
    const data = await response.json();

    dispatch(updateIsLoading(false));
    dispatch({
      type: UPDATE_TODAY_FORECAST,
      payload: data,
    });

  } catch (error) {
    dispatch(setError(error.message));
  };
};
