import { createGlobalStyle } from 'styled-components';

const Shadow = {
  CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  CARD_DEFAULT_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)',
  CARD_DEFAULT_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)'
};

const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-card-default-child: 0px 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus-child: inset 0px 0px 0px 1px #5FCB45;
    --shadow-card-hover-or-focus-adult: inset 0px 0px 0px 1px #FF833E;
  }
`;

export { Shadow, GlobalShadows };
