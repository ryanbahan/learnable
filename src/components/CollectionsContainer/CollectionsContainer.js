import Collection from '../Collection/Collection'
import styled from 'styled-components'

const CollectionsContainer = () => {
    return <Div>
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
            </Div>
}

const Div = styled.div`
margin: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export default CollectionsContainer