import { UPDATE_CURRENT_CONDITION, UPDATE_TODAY_FORECAST, UPDATE_IS_LOADING, SET_ERROR } from './forecastActionTypes';

const initialState = {
  isLoading: false,
  error: null,
  currentCondition: null,
  todayForecast: null,
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CONDITION:
      return {
        ...state,
        isLoading: false,
        error: null,
        currentCondition: action.payload,
      };
    case UPDATE_TODAY_FORECAST:
      return {
        ...state,
        isLoading: false,
        error: null,
        todayForecast: action.payload,
      };
    case UPDATE_IS_LOADING:
      return {
        ...state,
        error: null,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
