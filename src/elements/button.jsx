import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

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
    color: ${Color.WHITE};
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
    --color-button: ${Color.ORANGE_30};

    &:hover,
    &:focus {
      --color-button: ${Color.ORANGE_20};
    }

    &:active {
      --color-button: ${Color.ORANGE_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
    }
  `,
  [ButtonColor.GREEN]: css`
    --color-button: ${Color.GREEN_30};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_20};
    }

    &:active {
      --color-button: ${Color.GREEN_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
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
  border-radius: ${Radius[4]};
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { ButtonSize, ButtonVariant, ButtonColor, StyledButton as Button };
