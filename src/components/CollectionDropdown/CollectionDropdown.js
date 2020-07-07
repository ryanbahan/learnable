import { useContext } from 'react';
import { Div } from './styles'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Router from 'next/router';
import { CollectionContext } from '../../contexts/collectionContext';

const options = ['Archive', 'Delete', 'Go to page'];
const ITEM_HEIGHT = 48;

export default function Dropdown({ id }) {
  const collectionContext = useContext(CollectionContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (option) => {

    if (option === 'Delete') {
      collectionContext.deleteCollection(id);
    }

    if (option === 'Go to page') {
      Router.push(`/app/playlist/${id}`);
    }

    setAnchorEl(null);
  };

  return (
    <Div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Div>
  );
}

