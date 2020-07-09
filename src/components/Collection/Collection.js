import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';
import GradeIcon from '@material-ui/icons/Grade';
import Link from 'next/link'
import { CollectionContext } from '../../contexts/collectionContext';
import { useContext } from 'react';

const Collection = ({ title, id}) => {
    const collectionContext = useContext(CollectionContext);

    return (
        <Link href={`/app/collections/${id}`} as={`/app/collections/${id}`}>
            <Wrapper>
                <Div>
                    { title }
                    <IconWrapper>
                        <DeleteIcon onClick={(e) => {
                            e.stopPropagation()
                            collectionContext.deleteCollection(id)
                        }} />
                    </IconWrapper>
                </Div>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`
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

const Div = styled.div`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.fontPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    height: 100%;
    width: 100%;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`

export default Collection