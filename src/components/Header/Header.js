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

const Header = ({ toggleModal }) => {
  const [session, loading] = useSession()

  return (
    <CollectionsNav>
      <h3>Recently Viewed</h3>
      <AddButton onClick={() => toggleModal(true)}><AddIcon /></AddButton>
    </CollectionsNav>
  )
};

export default Header;
