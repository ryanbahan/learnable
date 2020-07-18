import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  border: 0.25px solid ${({ theme }) => theme.colors.grayLight};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1.5rem;
  height: 75vh;
  position: relative;
  transform-origin: center;
  min-width: 375px;
  width: 30vw;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};

    ${({ view }) =>
    !view &&
    css`
      border: 0.25px solid ${({ theme }) => theme.colors.grayLight};
      background-color: #fff;
      border-radius: ${({ theme }) => theme.styles.borderRadius};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 1.5rem;
      transform-origin: center;
      box-shadow: ${({ theme }) => theme.styles.boxShadow};
      width: 85%;
      height: 16rem;
      padding: 2.5rem 1rem;
      position: relative;
      flex-basis: 25%;
      min-width: 0;
      overflow: scroll;
    `}
`;