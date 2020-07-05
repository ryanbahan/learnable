import styled from 'styled-components';

export const P = styled.p`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  text-align: right;
`;