import styled from 'styled-components';
import declint from 'declint-ru';

import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radii';
import { TypographyVariant, Typography } from './typography';
import { BaseCard } from './helpers/base-card';

const StyledWrapper = styled(BaseCard)`
  height: 140px;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledCategoryCard = styled.article`
  position: relative;
  height: inherit;
  width: inherit;
  padding: 0 8px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: relative;
`;

const StyledAmount = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2
})`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: ${Radius[4]};
  padding: 2px 4px 4px;
  background-color: ${Color.ORANGE_30};
`;

function CategoryCard({ className, name, amount, image, imageAlt }) {
  return (
    <StyledWrapper className={className} to='#'>
      <StyledCategoryCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledName>{name}</StyledName>
        <StyledAmount>{declint(amount, ['%s модель', '%s модели', '%s моделей'])}</StyledAmount>
      </StyledCategoryCard>
    </StyledWrapper>
  );
}

export { CategoryCard };
