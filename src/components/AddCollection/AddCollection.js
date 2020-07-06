import styled from 'styled-components'

const AddCollection = ({ modalState, toggleModal }) => {
    return (
        <>
            <OuterWrapper onClick={() => toggleModal(false)}>
                <Modal onClick={(e) => {e.stopPropagation()}}>
                    addcollection
                </Modal>
            </OuterWrapper>
        </>
    )
}

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