import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar';
import Dropdown from '../Dropdown/Dropdown';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';

    // <Dropdown playlistId={id} />
    // <PlaylistTitle title={title} playlistItems={collection_items} />
    // <ProgressBar playlistItems={collection_items} />

const Collection = ({ title, id, collection_items }) => {
    return (
        <Div>
            collection
        </Div>
    )
}

const Div = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    height: 15rem;
    margin: 1.2rem;
    padding: 2.5rem 1rem;
    position: relative;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    flex-basis: 25%;
`

export default Collection