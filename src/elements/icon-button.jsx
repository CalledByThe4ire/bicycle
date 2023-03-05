import styled from 'styled-components';
import { BaseButton } from './helpers/base-button';
import { Color } from '../tokens/colors';

const StyledIconButton = styled(BaseButton)`
  display: inline-flex;
  color: ${Color.ORANGE_30};

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

  svg {
    color: currentColor;
  }
`;

export { StyledIconButton as IconButton };
