import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Div = styled(motion.div)`
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  display: flex;
  margin: 0.5rem 0;
  width: 35rem;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
`;

export const P = styled.p`
  flex-grow: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 75%;
`;