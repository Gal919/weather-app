import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${prop => prop.theme.body};
        margin: 0;
    }
`;

export const darkTheme = {
    body: '#1f1f'
}

export const lightTheme = {
    body: 'red'
}
