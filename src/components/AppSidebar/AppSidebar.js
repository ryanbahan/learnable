import { 
    Button,
    Div,
    Ul,
    Li,
    Aside,
} from './styles'
import CollectionsIcon from '@material-ui/icons/Collections';
import PersonIcon from '@material-ui/icons/Person'
import TimerIcon from '@material-ui/icons/Timer'
import StarsIcon from '@material-ui/icons/Stars'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const AppSidebar = () => {
    const navItems = [
        { name: "Collections", component: <CollectionsIcon style={{fontSize: "1.45rem"}} />, href: "/app"}, 
        { name: "Favorites", component: <StarsIcon style={{ fontSize: "1.45rem" }} />, href: "/app/favorites"}, 
        { name: "Profile", component: <PersonIcon style={{ fontSize: "1.45rem" }} />, href: "/app/profile"},
    ]
    const base = process.env.baseURL[process.env.type]
    const [session, loading] = useSession()
    const router = useRouter()

    const mapNavItems = navItems.map(item => {
        const isActive = router.pathname === item.href
        ? true
        : false

    return (
        <Link href={ item.href } key={ item.href } >
            <Li active={ isActive } >
                { item.component } 
                { item.name }
            </Li>
        </Link>
        )
    })

    return (
        <Aside>
            <Ul>
                { mapNavItems }
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