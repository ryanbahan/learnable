import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Main = styled(motion.main)`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 2.5rem 0 2.5rem;
  flex-grow: 1;
  width: 100vw;
  overflow: scroll;
  background-color: #f9f9f9;
  color: ${({ theme }) => theme.colors.fontPrimary};

  ${({ view }) =>
        !view &&
        css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `}
`;