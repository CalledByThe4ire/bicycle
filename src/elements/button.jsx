import styled, { css } from 'styled-components';

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined'
};

const ButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green'
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 0 4px 2px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 2px 6px 4px;
  `
};

const ButtonVariantToCSS = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;
    color: #ffffff;
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    color: var(--color-button);
    background-color: transparent;
  `
};

const ButtonColorToCSS = {
  [ButtonColor.ORANGE]: css`
    --color-button: #ff833e;

    &:hover,
    &:focus {
      --color-button: #ff9f69;
    }

    &:active {
      --color-button: #f06314;
    }

    &:disabled {
      --color-button: #adadad;
    }
  `,
  [ButtonColor.GREEN]: css`
    --color-button: #5fcb45;

    &:hover,
    &:focus {
      --color-button: #86da71;
    }

    &:active {
      --color-button: #42b026;
    }

    &:disabled {
      --color-button: #adadad;
    }
  `
};

const StyledButton = styled.button.attrs(({ type, size, variant, color }) => ({
  type: type || 'button',
  size: size || ButtonSize.MEDIUM,
  variant: variant || ButtonVariant.FILLED,
  color: color || ButtonColor.ORANGE
}))`
  ${({ size }) => ButtonSizeToCSS[size]}
  ${({ variant }) => ButtonVariantToCSS[variant]}
  ${({ color }) => ButtonColorToCSS[color]}

  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { ButtonSize, ButtonVariant, ButtonColor, StyledButton as Button };
