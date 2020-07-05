import styled from 'styled-components';

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