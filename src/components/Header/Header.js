import Link from 'next/link';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useAuth0 } from "../../react-auth0-spa";
import React from "react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const userContext = useContext(UserContext);
  const { user } = userContext.state;

  return (
    <Nav>
      <Link href="/">
        <H1>learnable</H1>
      </Link>
      <Div>
        <Ul>
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/app/notifications">
            <li>notifications</li>
          </Link>
        </Ul>
        {
          !isAuthenticated
          ? <Button onClick={() => loginWithRedirect()}>Log in</Button> 
          : <Button onClick={() => logout()}>Logout</Button>
        }
      </Div>
    </Nav>
  )
};

const H1 = styled.h1`
  cursor: pointer;
  font-weight: 200;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0 0.75rem;
  height: 2rem;
  border: none;
  min-width: 10rem;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  color: white;
  background: #9b59b6;
  cursor: pointer;
  margin: 0 0 0 0.5rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  height: 4rem;
  width: 100vw;
  display: flex;
  background: #ecf0f1;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

export default Header;
