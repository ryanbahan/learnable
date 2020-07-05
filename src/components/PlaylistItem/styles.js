import styled from 'styled-components';
import { motion } from 'framer-motion';

export const A = styled(motion.a).attrs({
    target: '_blank',
})`
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  text-decoration: none;
`;

export const P = styled.p`
  flex-grow: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 75%;
`;