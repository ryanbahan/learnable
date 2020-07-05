import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import TimerIcon from '@material-ui/icons/Timer'
import StarsIcon from '@material-ui/icons/Stars'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'

const AppSidebar = () => {
    const [session, loading] = useSession()

    return (
        <Aside>
            <Ul>
                <Li><PersonIcon /> Profile</Li>
                <Li><TimerIcon /> Recent</Li>
                <Li><SearchIcon /> Search</Li>
                <Li><StarsIcon /> Favorites</Li>
            </Ul>
            <Div>
                {
                    session
                    ? <Button onClick={ signout }>Log out</Button>
                    : <Button onClick={ signin }>Log in</Button>
                }
            </Div>
        </Aside>
    )
}

const Button = styled.button`
    font-size: 1rem;
    height: 2rem;
    border: none;
    min-width: 7.5rem;
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    color: white;
    background: #9b59b6;
    cursor: pointer;
`;

const Div = styled.div`
    position: absolute;
    bottom: 2.5rem;
`

const Ul = styled.ul`
    width: 100%;
`

const Li = styled.li`  
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;

    > * {
        padding: 0.25rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.grayLighter};
    }
`

const Aside = styled.aside`
    position: relative;
    border-right: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    width: 12.5rem;
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 0;
`

export default AppSidebar