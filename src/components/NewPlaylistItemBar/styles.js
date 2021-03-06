import styled, { css } from 'styled-components';

export const Article = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacers.xs};

    ${({ view }) =>
    !view &&
    css`
    padding: 0;
    }
  `}
`;

export const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
`;

export const Button = styled.button.attrs(() => {
    'button';
})`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: ease-in-out 0.1s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontPrimary};
  }
`;

export const PlaylistItemCount = styled.span`
  background-color: ${({ theme }) => theme.colors.grayLighter};
  border-radius: 2rem;
  -moz-border-radius: 2rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
`;

export const Span = styled.span`
  font-weight: 200;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;