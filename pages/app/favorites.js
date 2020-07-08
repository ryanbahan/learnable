import AppSidebar from '../../src/components/AppSidebar/AppSidebar'
import styled from 'styled-components'

const Favorites = () => {
    return (
        <Main>
            <AppSidebar />
        </Main>
    )
}

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    height: 100vh;
`

export default Favorites