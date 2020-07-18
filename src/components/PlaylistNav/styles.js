import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  padding-left: 1rem;

  @media (max-width: 450px) {
    display: none;
  }
`

export const ArchiveButton = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;

  ${({ view }) =>
        view &&
        css`
      border: 0.5px solid ${({ theme }) => theme.colors.grayLight};
      box-shadow: inset 0px 0px 15px rgba(0,0,0,0.25);
    `}
`;

export const Button = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;

  ${({ disabled }) =>
        disabled &&
        css`
      background: ${({ theme }) => theme.colors.grayLighter};
      color: ${({ theme }) => theme.colors.grayLight};

      &:hover {
        cursor: auto;
      }
    `}
`;

export const Div = styled.div`
  display: flex;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem 2rem 0 2rem;
  width: 100%;

  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const P = styled(motion.p)`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  height: 2.5rem;
  transform-origin: top;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 0.75rem;

  ${({ view }) =>
        !view &&
        css`
      position: absolute;
    `}
`;

export const Wrapper = styled.div`
  width: min-content;
  position: relative;

  p {
    display: none;
  }
`;