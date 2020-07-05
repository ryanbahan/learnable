import {
  H1,
  Div,
  Button,
  Ul,
  Nav,
} from './styles'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'

const Header = ({ type }) => {
  const [session, loading] = useSession()

  switch (type) {
    case "collections":
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
