import AppSidebar from '../../src/components/AppSidebar/AppSidebar'
import styled from 'styled-components'

const Profile = () => {
    return (
        <Main>
            <AppSidebar active="profile" />
            <Div>
                <p>
                    This section is currently under construction. Check back soon!
                </p>
            </Div>
        </Main>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

const Main = styled.main`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export default Profile