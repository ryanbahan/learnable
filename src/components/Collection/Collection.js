import {
    Wrapper,
    Div,
    IconWrapper,
} from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link'
import { CollectionContext } from '../../contexts/collectionContext';
import { useContext } from 'react';

const Collection = ({ title, id}) => {
    const collectionContext = useContext(CollectionContext);

    return (
        <Link href={`/app/collections/[id]`} as={`/app/collections/${id}`}>
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

export default Collection