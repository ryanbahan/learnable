import { 
    Button,
    Div,
    Ul,
    Li,
    Aside,
} from './styles'
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
                <Link href="/app/profile"><Li><PersonIcon /> Profile</Li></Link>
                <Link href="/app"><Li><TimerIcon /> Recent</Li></Link>
                <Link href="/app/search"><Li><SearchIcon /> Search</Li></Link>
                <Link href="/app/favorites"><Li><StarsIcon /> Favorites</Li></Link>
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

export default AppSidebar