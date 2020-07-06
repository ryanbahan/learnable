import {
  H1,
  Div,
  Button,
  AddButton,
  Ul,
  Nav,
  CollectionsNav,
} from './styles'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'
import AddIcon from '@material-ui/icons/Add';

const Header = ({ type }) => {
  const [session, loading] = useSession()

  switch (type) {
    case "collections":
      return (
        <CollectionsNav>
          <h3>Recently Viewed</h3>
          <AddButton><AddIcon /></AddButton>
        </CollectionsNav>
      )
    case "collection": 
      return (
        <Nav>
          <Link href="/">
            <H1>learnable</H1>
          </Link>
          <Div>
            <Ul>
              <Link href="/app">
                <li>home</li>
              </Link>
            </Ul>
            {
              session && session.user
                ? <Button onClick={signout}>Log out</Button>
                : <Button onClick={signin}>Log in</Button>
            }
          </Div>
        </Nav>
      )
  }
};

export default Header;
