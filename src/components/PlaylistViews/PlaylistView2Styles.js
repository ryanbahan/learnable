import styled, { css } from 'styled-components';

export const Div = styled.div`
  flex-grow: 1;
`;

export const NoItemsButton = styled.button.attrs({
    type: 'button',
})`
  align-items: center;
  background: none;
  border: 1px dashed ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  padding: ${({ theme }) => theme.spacers.xs};
  width: 100%;

  &:hover {
    border: 1px dashed ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.grayDark};
    cursor: pointer;
  }

  ${({ inputActive }) =>
        inputActive &&
        css`
      display: none;

      &:hover {
        cursor: auto;
      }
    `}
`;