import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    border: solid 1px black;
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    margin: 0.5rem;
    padding: 2.5rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    flex-basis: 25%;
    cursor: pointer;
`

export const Div = styled.div`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.fontPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    height: 100%;
    width: 100%;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`