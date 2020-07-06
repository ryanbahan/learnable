import styled from 'styled-components'
import Input from '../Input/Input'
import { useState } from 'react'

const AddCollection = ({ toggleModal }) => {
    const [ text, setText ] = useState("")

    return (
        <>
            <OuterWrapper onClick={() => toggleModal(false)}>
                <Modal onClick={(e) => {e.stopPropagation()}}>
                    <Input 
                        label="Collections Title"
                        onChangeHandler={(e) => setText(e.target.value)}
                        placeholder="what should we call this?"
                        type="text"
                        value={text}
                    />
                    <ButtonWrapper>
                        <Button>Create Collection</Button>
                        <CancelButton onClick={() => toggleModal(false)}>Cancel</CancelButton>
                    </ButtonWrapper>
                </Modal>
            </OuterWrapper>
        </>
    )
}

export const Button = styled.button`
    font-size: 1rem;
    height: 2rem;
    border: none;
    min-width: 10rem;
    box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    color: white;
    background: #9b59b6;
    cursor: pointer;
    margin: 0 1rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CancelButton = styled.button`
    font-size: 1rem;
    height: 2rem;
    border: none;
    color: #e74c3c;
    background: transparent;
    cursor: pointer;
`;

const Modal = styled.section`
    position: absolute;
    background: white;
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    height: 75vh;
    width: 65vw;
    min-height: 20rem;
    min-width: 20rem;
    margin: 0.5rem;
    padding: 2.5rem 1rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    z-index: 5;
`

const OuterWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default AddCollection