import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.grayLighter};
  color: ${({ theme }) => theme.colors.fontPrimary};
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
        cursor: not-allowed;

      && > * {
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.grayLight};
        background-color: #f9f9f9;
      }
    `}
`;

export const FormControl = styled(motion.div)`
  display: flex;
  margin: ${({ theme }) => theme.spacers.xs} 0;
  position: relative;
  transform-origin: top;
  width: 100%;

  & label,
  & input {
    display: block;
  }

  & label {
    color: transparent;
    pointer-events: none;
    position: absolute;
  }

  & input {
    border: 1px solid ${({ theme }) => theme.colors.grayLighter};
    font: inherit;
    height: 3rem;
    padding: 0.15rem 0.6rem;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  & p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 300;
    position: absolute;
    left: 0;
    top: 3rem;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & label {
        color: transparent;
        pointer-events: none;
        position: absolute;
      }

      & p {
        color: red;
      }

      & input {
        background: #ffd1d1;
        border-color: red;
        margin-bottom: 0.4rem;
      }
    `}
`;
