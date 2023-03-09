import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BaseButton } from './helpers/base-button';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radii';

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

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}
  ${({ variant }) => ButtonVariantToCSS[variant]}
  ${({ color }) => ButtonColorToCSS[color]}

  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius[4]};
  font-size: 16px;
  line-height: 22px;

  svg {
    color: currentColor;
  }
`;

const attrsFactory = ({ size, variant, color }) => ({
  size: size || ButtonSize.MEDIUM,
  variant: variant || ButtonVariant.FILLED,
  color: color || ButtonColor.ORANGE
});

const StyledButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { ButtonSize, ButtonVariant, ButtonColor, StyledButton as Button, StyledLink as Link };
