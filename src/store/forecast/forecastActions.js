import { UPDATE_CURRENT_CONDITION, UPDATE_TODAY_FORECAST, UPDATE_IS_LOADING, SET_ERROR } from './forecastActionTypes';
import { fetchApi } from '../../api';

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
    const data = await fetchApi(`weather?q=${city}&units=metric`);

    dispatch({
      type: UPDATE_CURRENT_CONDITION,
      payload: data,
    });

  } catch (error) {
    dispatch(setError(error.message));
  };
};

export const updateTodayForecast = (city) => async (dispatch) => {
  try {
    const data = await fetchApi(`forecast?q=${city}&units=metric&cnt=6`);

    dispatch({
      type: UPDATE_TODAY_FORECAST,
      payload: data,
    });

  } catch (error) {
    dispatch(setError(error.message));
  };
};
