import styled from 'styled-components';
import { Color } from '../../tokens/colors';
import { Radius } from '../../tokens/radii';

const StyledBaseField = styled.input`
  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};

  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius[4]};

  &:hover {
    border-color: ${Color.ORANGE_20};
  }

  &:focus {
    border-color: ${Color.ORANGE_40};
  }
`;

export { StyledBaseField as BaseField };
