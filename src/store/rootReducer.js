import { combineReducers } from 'redux';
import { forecastReducer } from './forecast/forecastReducer';
import { themeReducer } from './theme/themeReducer';

const rootReducer = combineReducers({
    forecast: forecastReducer,
    theme: themeReducer,
});

export default rootReducer;