import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './icon';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledFilter = styled.select`
  width: 100%;
  padding-right: 26px;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};
  appearance: none;
  cursor: pointer;

  + svg {
    color: ${Color.WHITE};
  }

  &:hover {
    color: ${Color.ORANGE_20};

    + svg {
      color: ${Color.ORANGE_20};
    }
  }

  &:focus {
    color: ${Color.ORANGE_40};

    + svg {
      color: ${Color.ORANGE_40};
    }
  }
`;

const StyledChevron = styled(Icon).attrs({ name: IconName.CHEVRON_DOWN })`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

function Filter({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledFilter aria-label={label}>{children}</StyledFilter>
      <StyledChevron />
    </StyledWrapper>
  );
}

export { Filter };
