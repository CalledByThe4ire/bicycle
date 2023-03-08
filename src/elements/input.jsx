import styled from 'styled-components';
import { BaseField } from './helpers/base-field';

const StyledInput = styled(BaseField)`
  width: 200px;
  padding: 2px 6px 4px;

  &::placeholder {
    color: currentColor;
  }
`;

export { StyledInput as Input };
