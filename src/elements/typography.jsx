import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';

const TypographyVariant = {
  TITLE_1: 'title-1',
  TITLE_2: 'title-2',
  TITLE_3: 'title-3',
  TITLE_4: 'title-4',
  TEXT_1: 'text-1',
  TEXT_2: 'text-2',
  TEXT_3: 'text-3'
};

const TypographyVariantToCSS = {
  [TypographyVariant.TITLE_1]: css`
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
  `,
  [TypographyVariant.TITLE_2]: css`
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  `,
  [TypographyVariant.TITLE_3]: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  `,
  [TypographyVariant.TITLE_4]: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
  `,
  [TypographyVariant.TEXT_1]: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  `,
  [TypographyVariant.TEXT_2]: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  `,
  [TypographyVariant.TEXT_3]: css`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  `
};

const StyledTypography = styled.div.attrs(({ color }) => ({
  color: color || Color.WHITE
}))`
  ${({ variant }) => TypographyVariantToCSS[variant]}

  color: ${({ color }) => color};
`;

export { TypographyVariant, StyledTypography as Typography };
