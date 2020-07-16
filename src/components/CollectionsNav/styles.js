import styled from 'styled-components';

export const AddButton = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 100;
  background: transparent;
  padding-top: 0.15rem;
`;

export const CollectionsNavWrapper = styled.nav`
  height: 3.5rem;
  width: 100%;
  display: flex;
  border-bottom: solid 0.25px ${({ theme }) => theme.colors.grayLight};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLighter};
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;