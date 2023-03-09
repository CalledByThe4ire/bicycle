import styled from 'styled-components';
import Moment from 'react-moment';

import { Color } from '../tokens/colors';
import { TypographyVariant, Typography } from './typography';
import { BaseCard } from './helpers/base-card';

const StyledNewsCard = styled.article``;

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
  grid-template-columns: 1fr min-content;
  align-items: end;
  gap: 8px;
  padding: 4px 8px 8px;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_4
})``;

const StyledDate = styled(Typography).attrs({
  as: 'time',
  variant: TypographyVariant.TEXT_2,
  color: Color.ORANGE_30
})``;

const StyledMoment = styled(StyledDate).attrs({
  as: Moment,
  format: 'DD.MM.YYYY',
  withTitle: true
})``;

function NewsCard({ className, name, date, image, imageAlt }) {
  return (
    <BaseCard className={className} to='#'>
      <StyledNewsCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledContent>
          <StyledName>{name}</StyledName>
          <StyledMoment>{date}</StyledMoment>
        </StyledContent>
      </StyledNewsCard>
    </BaseCard>
  );
}

export { NewsCard };
