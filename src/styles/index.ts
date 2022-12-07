import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components';

import { breakpoints } from './breakpoints';

export const ThemeProvider = Provider;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: 'Suez One', Arial, Helvetica, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }
`;

export const theme: ThemeType = {
  breakpoint: breakpoints,
};
