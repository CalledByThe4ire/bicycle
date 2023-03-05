import styled from 'styled-components';

const StyledBaseButton = styled.button.attrs(({ type }) => ({
  type: type || 'button'
}))`
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { StyledBaseButton as BaseButton };
