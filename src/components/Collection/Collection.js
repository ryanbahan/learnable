import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar';
import Dropdown from '../Dropdown/Dropdown';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import Link from 'next/link'

const Collection = ({ title, id}) => {
    return (
        <Wrapper>
            <Dropdown playlistId={ id } />
            <Link href={`/app/collections/${id}`} as={`/app/collections/${id}`}>
                <Div>
                    { title }
                </Div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    border: solid 1px black;
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    height: 15rem;
    margin: 0.5rem;
    padding: 2.5rem 1rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    flex-basis: 25%;
`

const Div = styled.div`
    position: absolute;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    padding: 2.5rem;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export default Collection