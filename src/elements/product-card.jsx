import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { Radius } from '../tokens/radii';
import { IconName } from '../tokens/icons';
import { Icon } from './icon';
import { IconButton } from './icon-button';
import { ButtonVariant, Button } from './button';
import { TypographyVariant, Typography } from './typography';

const StyledProductCard = styled.article`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  gap: 8px;
  padding: 4px 8px 8px;
`;

const StyledNameAndPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 8px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TEXT_1
})``;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TITLE_4
})``;

const StyledButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 8px;
`;

const StyledMoreButton = styled(Button).attrs({
  variant: ButtonVariant.OUTLINED
})``;

const StyledLabels = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: grid;
  justify-items: start;
  gap: 4px;
`;

const StyledLabel = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2
})`
  border-radius: ${Radius[4]};
  padding: 2px 4px 4px;
  background-color: ${Color.GRAY_40};
`;

const StyledIconButtons = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
`;

const StyledIconButton = styled(IconButton)`
  border-radius: 50%;
  padding: 4px;
  background-color: ${Color.GRAY_40};

  &:disabled {
    color: ${Color.WHITE};
    background-color: ${Color.GRAY_30};
  }
`;

const UNAVAILABLE_CSS = css`
  cursor: not-allowed;

  ${StyledImage} {
    opacity: 0.4;
  }

  ${StyledName},
  ${StyledPrice} {
    color: ${Color.GRAY_30};
  }

  ${StyledLabel} {
    background-color: ${Color.GRAY_30};
  }

  &::after {
    display: none;
  }
`;

const StyledWrapper = styled(Link)`
  position: relative;
  display: grid;
  border-radius: ${Radius[4]};
  background-color: ${Color.GRAY_40};
  overflow: hidden;

  &:hover,
  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${Radius[4]};
      box-shadow: ${Shadow.CARD_DEFAULT_HOVER_OR_FOCUS_ADULT};
      pointer-events: none;
    }
  }

  ${({ unavailable }) => unavailable && UNAVAILABLE_CSS}
`;

function ProductCard({ className, name, price, image, imageAlt, hit, novelty, discount, unavailable }) {
  return (
    <StyledWrapper className={className} to='#' unavailable={unavailable}>
      <StyledProductCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledContent>
          <StyledNameAndPrice>
            <StyledName>{name}</StyledName>
            <StyledPrice>{`${price.toLocaleString('en-US').replace(',', ' ')} ₽`}</StyledPrice>
          </StyledNameAndPrice>
          <StyledButtons>
            <Button disabled={unavailable}>Купить</Button>
            <StyledMoreButton disabled={unavailable}>Подробнее</StyledMoreButton>
          </StyledButtons>
        </StyledContent>
        <StyledLabels>
          {hit && <StyledLabel>Хит</StyledLabel>}
          {novelty && <StyledLabel>Новинка</StyledLabel>}
          {discount && <StyledLabel>Скидка</StyledLabel>}
        </StyledLabels>
        <StyledIconButtons>
          <StyledIconButton aria-label='Добавить товар в сравнения' disabled={unavailable}>
            <Icon name={IconName.BAR_CHART_SMALL} />
          </StyledIconButton>
          <StyledIconButton aria-label='Добавить товар в избранное' disabled={unavailable}>
            <Icon name={IconName.HEART_SMALL} />
          </StyledIconButton>
        </StyledIconButtons>
      </StyledProductCard>
    </StyledWrapper>
  );
}

export { ProductCard };
