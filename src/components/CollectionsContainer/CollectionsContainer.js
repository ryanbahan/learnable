import {
    Wrapper,
    Main,
    Grid,
    GridWrapper,
} from './styles'
import Collection from '../Collection/Collection'
import CollectionsSidebar from '../CollectionsSidebar/CollectionsSidebar'
import { useContext, useState } from 'react'
import { CollectionContext } from '../../contexts/collectionContext';
import CollectionsNav from '../CollectionsNav/CollectionsNav'
import AddCollection from '../AddCollection/AddCollection'

const CollectionsContainer = () => {
    const [collectionsModal, toggleCollectionsModal] = useState(false)
    const collectionContext = useContext(CollectionContext);
    const collections = collectionContext.state

    return <Main>
                <CollectionsSidebar />
                <Wrapper>
                    {
                        collectionsModal
                        ? <AddCollection
                            modalState={collectionsModal}
                            toggleModal={toggleCollectionsModal}
                        />
                        : null
                    }
                    <CollectionsNav
                        modalState={ collectionsModal } 
                        toggleModal={ toggleCollectionsModal } 
                    />
                    <GridWrapper>
                        <Grid>
                            {
                                collections 
                                ? collections.map(c => <Collection key={c.id} {...c} />) 
                                : null
                            }
                        </Grid>
                        <div style={{height: "1rem"}} />
                    </GridWrapper>
                </Wrapper>
            </Main>
}

export default CollectionsContainer