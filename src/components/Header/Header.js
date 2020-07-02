import Link from 'next/link';
import styled from 'styled-components';
import React from "react";
import { signin, signout, useSession } from 'next-auth/client'

const Header = () => {
  const [session, loading] = useSession()

  return (
    <Nav>
      <Link href="/">
        <H1>learnable</H1>
      </Link>
      <Div>
        <Ul>
          <Link href="/app">
            <li>home</li>
          </Link>
        </Ul>
        {
        session && session.user 
        ? <Button onClick={signout}>Log out</Button> 
        : <Button onClick={signin}>Log in</Button>
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
  height: 2rem;
  border: none;
  min-width: 7.5rem;
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
