import Collection from '../Collection/Collection'
import AppSidebar from '../AppSidebar/AppSidebar'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { CollectionContext } from '../../contexts/collectionContext';
import { useSession } from 'next-auth/client'
import Header from '../Header/Header'
import AddCollection from '../AddCollection/AddCollection'

const CollectionsContainer = () => {
    const [session, loading] = useSession()
    const [collectionsModal, toggleCollectionsModal] = useState(false)
    const collectionContext = useContext(CollectionContext);
    const collections = collectionContext.state

    return <Main>
                <AppSidebar />
                <Wrapper>
                    {
                        collectionsModal
                        ? <AddCollection
                            modalState={collectionsModal}
                            toggleModal={toggleCollectionsModal}
                        />
                        : null
                    }
                    <Header 
                        type="collections" 
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

const Wrapper = styled.div`
    width: 100%;
`

const Main = styled.main`
    flex-grow: 1;
    display: flex;
`

const Grid = styled.div`
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const GridWrapper = styled.div`
    overflow: scroll;
    height: calc(100vh - 3rem);
`

export default CollectionsContainer