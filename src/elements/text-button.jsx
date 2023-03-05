import styled, { css } from 'styled-components';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    line-height: 18px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `
};

const StyledTextButton = styled(BaseButton).attrs(({ size }) => ({
  size: size || TextButtonSize.MEDIUM
}))`
  ${({ size }) => TextButtonSizeToCSS[size]}

  color: ${Color.WHITE};

  &:hover,
  &:focus {
    color: ${Color.ORANGE_20};
  }

  &:active {
    color: ${Color.ORANGE_40};
  }

  &:disabled {
    color: ${Color.GRAY_30};
  }
`;

export { TextButtonSize, StyledTextButton as TextButton };
