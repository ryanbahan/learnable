import {
  AddButton,
  CollectionsNavWrapper,
  H3,
} from './styles'
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client'
import AddIcon from '@material-ui/icons/Add';

const CollectionsNav = ({ toggleModal }) => {
  const [session, loading] = useSession()

  return (
    <CollectionsNavWrapper>
      <H3>Recently Viewed</H3>
      <AddButton onClick={() => toggleModal(true)}><AddIcon /></AddButton>
    </CollectionsNavWrapper>
  )
};

export default CollectionsNav;
