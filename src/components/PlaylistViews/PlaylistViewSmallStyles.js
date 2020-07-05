import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Div = styled(motion.div)`
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  height: 15rem;
  margin: 1.2rem;
  padding: 2.5rem 1rem;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  flex-basis: 25%;
`;