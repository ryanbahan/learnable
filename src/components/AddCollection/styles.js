import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1rem;
    height: 2rem;
    border: none;
    min-width: 10rem;
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    border-radius: 0.25rem;
    color: white;
    background: #9b59b6;
    cursor: pointer;
    margin: 0 1rem;

    &:hover {
        background: #8e44ad;     
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CancelButton = styled.button`
    font-size: 0.85rem;
    height: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.fontSecondary};
    background: #fff;
    cursor: pointer;
`;

export const Modal = styled.section`
    position: absolute;
    background: white;
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    height: 45vh;
    width: 35vw;
    min-height: 20rem;
    min-width: 20rem;
    margin: 0.5rem;
    padding: 2.5rem 1rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    z-index: 10;
`

export const OuterWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`