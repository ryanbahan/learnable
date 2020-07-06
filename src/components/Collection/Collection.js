import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar';
import Dropdown from '../Dropdown/Dropdown';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import Link from 'next/link'

    // <Dropdown playlistId={id} />
    // <ProgressBar playlistItems={collection_items} />

const Collection = ({ title, id}) => {
    return (
        <Link href={`/app/collections/${id}`} as={`/app/collections/${id}`}>
            <Div>
                { title }
            </Div>
        </Link>
    )
}

const Div = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    height: 15rem;
    margin: 0.5rem;
    padding: 2.5rem 1rem;
    position: relative;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    flex-basis: 25%;
`

export default Collection