import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({
    type: 'button',
}))`
  background: #3498db;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  height: 2.5rem;
  width: 100%;

  &:hover {
    background: #2980b9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;