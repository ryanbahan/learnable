import styled, { css } from 'styled-components';

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