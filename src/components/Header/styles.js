import styled from 'styled-components';

export const H1 = styled.h1`
  cursor: pointer;
  font-weight: 200;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
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

export const Ul = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  height: 4rem;
  width: 100vw;
  display: flex;
  background: #ecf0f1;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;