import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Font } from '../tokens/fonts';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { Radius } from '../tokens/radii';
import { BaseCard } from './helpers/base-card';

const StyledBanner = styled.article`
  position: relative;
  padding: 4px 8px 8px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTitle = styled.h3`
  position: relative;
  font-family: ${Font.DELA_GOTHIC_ONE};
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${Color.WHITE};
`;

const StyledDiscount = styled.div`
  position: absolute;
  bottom: 4px;
  left: 8px;
  font-family: ${Font.DELA_GOTHIC_ONE};
  font-size: 40px;
  line-height: 46px;
  color: ${Color.WHITE};
`;

const BannerSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const BannerSizeToCSS = {
  [BannerSize.MEDIUM]: css`
    @media (min-width: 768px) {
      height: 100px;

      ${StyledTitle} {
        font-size: 16px;
        line-height: 20px;
      }
    }
  `,
  [BannerSize.LARGE]: css`
    @media (min-width: 768px) {
      height: 216px;
    }
  `
};

const StyledWrapper = styled(BaseCard).attrs(({ size }) => ({
  size: size || BannerSize.MEDIUM
}))`
  ${({ size }) => BannerSizeToCSS[size]}
  height: 140px;
`;

function Banner({ className, size, title, discount, image, imageAlt }) {
  return (
    <StyledWrapper className={className} size={size} to='#'>
      <StyledBanner>
        <StyledImage src={image} alt={imageAlt} />
        <StyledTitle>{title}</StyledTitle>
        {discount && <StyledDiscount>{discount}</StyledDiscount>}
      </StyledBanner>
    </StyledWrapper>
  );
}

export { BannerSize, Banner };
