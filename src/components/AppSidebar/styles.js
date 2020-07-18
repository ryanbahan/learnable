import styled, { css } from 'styled-components';

export const Button = styled.button`
    font-size: 0.75rem;
    height: 1.75rem;
    border: none;
    width: 5rem;
    border: solid 0.25px ${({ theme }) => theme.colors.fontPrimary};
    box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.fontPrimary};
    background: transparent;
    cursor: pointer;
`;

export const Div = styled.div`
    position: absolute;
    bottom: 2.5rem;
`

export const Ul = styled.ul`
    width: 100%;
`

export const Li = styled.li`  
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    padding: 1rem;
    cursor: pointer;

    > * {
        padding: 0.25rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.grayLighter};
    }

    ${({ active }) =>
        active &&
        css`
          background: ${({ theme }) => theme.colors.grayLighter};  
    `}
`

export const Aside = styled.aside`
    position: relative;
    border-right: solid 0.25px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadowLighter};
    width: 10vw;
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;

    @media (max-width: 550px) {
        display: none;
    }
`