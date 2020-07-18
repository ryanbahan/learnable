import styled from 'styled-components';
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
`;