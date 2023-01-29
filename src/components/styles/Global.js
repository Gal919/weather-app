import { createGlobalStyle } from 'styled-components';
import { Container } from './Header';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    };

    body {
        background: ${(prop) => prop.theme.body};
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        color: ${(prop) => prop.theme.primery};

        @media (max-width: 480px) {
            ${Container} {
                padding: 15px;
                i {
                    font-size: 20px;
                };
            };
        };
    };
`;

export const lightTheme = {
  body: '#ffffff',
  background: '#f2f2f3',
  primery: '#5b5b5b',
  secondry: '#c3c3c3',
  sunIcon: '#FFD700',
  moonIcon: '#5b5b5b',
};

export const darkTheme = {
  body: '#373442',
  background: '#3f3c4a',
  primery: '#eeeeee',
  secondry: '#696676',
  sunIcon: '#eeeeee',
  moonIcon: '#4A9FE8',
};
