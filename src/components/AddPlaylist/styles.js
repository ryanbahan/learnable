import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 1rem;
`;

export const Button = styled(motion.button)`
  background: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  height: 10rem;
  margin: 2.5rem 2.5rem 2.5rem 0;
  min-width: 25rem;
  width: 25rem;

  &:hover {
    cursor: pointer;
  }

  ${({ disabled }) =>
        disabled &&
        css`
      border: 1px dashed ${({ theme }) => theme.colors.grayLight};
      color: ${({ theme }) => theme.colors.grayLight};

      &:hover {
        cursor: auto;
      }
    `}
`;