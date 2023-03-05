import { createGlobalStyle } from 'styled-components';

const Color = {
  ORANGE_10: 'var(--color-orange-10)',
  ORANGE_20: 'var(--color-orange-20)',
  ORANGE_30: 'var(--color-orange-30)',
  ORANGE_40: 'var(--color-orange-40)',
  GREEN_10: 'var(--color-green-10)',
  GREEN_20: 'var(--color-green-20)',
  GREEN_30: 'var(--color-green-30)',
  GREEN_40: 'var(--color-green-40)',
  WHITE: 'var(--color-white)',
  GRAY_10: 'var(--color-gray-10)',
  GRAY_20: 'var(--color-gray-20)',
  GRAY_30: 'var(--color-gray-30)',
  GRAY_40: 'var(--color-gray-40)',
  GRAY_50: 'var(--color-gray-50)',
  GRAY_60: 'var(--color-gray-60)',
  GRAY_70: 'var(--color-gray-70)'
};

const GlobalColors = createGlobalStyle`
  :root {
    --color-orange-10: #ffc9aa;
    --color-orange-20: #ff9f69;
    --color-orange-30: #ff833e;
    --color-orange-40: #f06314;

    --color-green-10: #bff5b1;
    --color-green-20: #86da71;
    --color-green-30: #5fcb45;
    --color-green-40: #42b026;

    --color-white: #ffffff;

    --color-gray-10: #ededed;
    --color-gray-20: #cccccc;
    --color-gray-30: #adadad;
    --color-gray-40: #3f3f3f;
    --color-gray-50: #363636;
    --color-gray-60: #2c2c2c;
    --color-gray-70: #1f1f1f;
  }
`;

export { Color, GlobalColors };
