import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({
    type: 'button',
}))`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const DoneButton = styled.button.attrs(() => ({
    type: 'button',
}))`
  background: #3498db;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  height: 2.5rem;
  margin: 2.5rem 0 0.5rem 0;
  width: 100%;

  &:hover {
    background: #2980b9;
  }
`;

export const Grid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacers.xxs};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 0.85rem;
  margin: 0.25rem 0;
  text-align: center;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacers.xs};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`