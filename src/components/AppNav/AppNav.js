import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import styled, { css } from 'styled-components';
import { useState, useContext } from 'react';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import AddIcon from '@material-ui/icons/Add';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ArchiveIcon from '@material-ui/icons/Archive';

const variants = {
  active: {
    y: 1,
    opacity: 1,
    transition: {
      damping: 500,
      duration: 0.1,
    },
  },
  disabled: {
    y: -25,
    opacity: -0.5,
  },
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #f9f9f9;
  padding: 1rem 2.5rem;
`;

const P = styled(motion.p)`
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

const Wrapper = styled.div`
  width: min-content;
  position: relative;

  p {
    display: none;
  }

  &:hover {
    & > * {
      display: block;
    }
  }
`;

const Button = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;
`;

const AppNav = () => {
  const [ hover, setHover ] = useState(null);
  const appSettingsContext = useContext(AppSettingsContext);
  const { view } = appSettingsContext.state;
  const { switchView } = appSettingsContext;

  return (
    <Nav>
    <Wrapper onMouseEnter={() => setHover("AddIcon")}>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <AddIcon />
      </Button>
      {hover === "AddIcon" ? <P view={view} variants={variants} initial="disabled" animate="active">New playlist</P> : null}
    </Wrapper>
    <Wrapper onMouseEnter={() => setHover("ViewIcon")}>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => switchView()}>
        {view === true ? <ViewHeadlineIcon /> : <ViewWeekIcon fontSize="large" />}
      </Button>
      {hover === "ViewIcon" ? <P view={view} variants={variants} initial="disabled" animate="active">Toggle views</P> : null}
    </Wrapper>
    <Wrapper onMouseEnter={() => setHover("ArchiveIcon")}>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <ArchiveIcon />
      </Button>
      {hover === "ArchiveIcon" ? <P view={view} variants={variants} initial="disabled" animate="active">Show archived</P> : null}
    </Wrapper>
  </Nav>
  )
};

export default AppNav;
