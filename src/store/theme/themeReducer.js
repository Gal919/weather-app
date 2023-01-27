import { TOGGLE_THEME } from './themeActionsTypes';
import { darkTheme, lightTheme } from '../../components/styles/Global';

export const themeReducer = (state = lightTheme, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state === lightTheme ? darkTheme : lightTheme;
        default:
            return state;
    }
};
