import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: relative;
    border: 0.25px solid ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    margin: 1rem 0.5rem;
    padding: 2.5rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    flex-basis: 25%;
    cursor: pointer;
    background: white;
`

export const Div = styled.div`
    font-size: 1.25rem;
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