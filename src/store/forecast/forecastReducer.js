import { UPDATE_CURRENT_CONDITION, UPDATE_TODAY_FORECAST } from './forecastActionTypes';

const initialState = {
  currentCondition: {},
  todayForecast: {},
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CONDITION:
      return { 
        ...state, 
        currentCondition: action.payload,
      };
    case UPDATE_TODAY_FORECAST:
      return {
         ...state,
         todayForecast: action.payload,
        }; 
    default:
      return state;
  }
};
