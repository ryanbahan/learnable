import {
  AddButton,
  CollectionsNavWrapper,
} from './styles'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'
import AddIcon from '@material-ui/icons/Add';

const CollectionsNav = ({ toggleModal }) => {
  const [session, loading] = useSession()

  return (
    <CollectionsNavWrapper>
      <h3>Recently Viewed</h3>
      <AddButton onClick={() => toggleModal(true)}><AddIcon /></AddButton>
    </CollectionsNavWrapper>
  )
};

export default CollectionsNav;
