import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacers.xs};
`

export const Bar = styled.div.attrs({
    'data-testid': 'progressbar',
})`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const PercentComplete = styled.div`
  height: 1rem;
  background-color: #2ecc71;
  ${({ percentage }) =>
        css`
      width: ${percentage};
    `}
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  text-align: right;
`;

export const Div = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  margin-top: ${({ theme }) => theme.spacers.sm};
`;

export const Span = styled.span`
  font-weight: 500;
`;