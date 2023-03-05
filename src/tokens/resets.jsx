import { createGlobalStyle } from 'styled-components';
import { Font } from './fonts';
import { Color } from './colors';

const GlobalResets = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }

  body {
    font-family: ${Font.COMMISSIONER};
    font-weight: 400;
    font-style: normal;
    background-color: ${Color.GRAY_50};
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export { GlobalResets };
