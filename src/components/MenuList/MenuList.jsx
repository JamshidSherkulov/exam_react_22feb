import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import EditUserModal from '../EditUserModal/EditUserModal';


const ITEM_HEIGHT = 48;

export default function LongMenu({blockUser, unBlockUser, deleteUser, editUser, index}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
         className='mx-auto'
      >
        <Button onClick={() => blockUser(index)} className='m-2 w-75' color='error' variant='outlined'>Bloklash</Button>
        <Button onClick={() => unBlockUser(index)} className='m-2 w-75' color='success' variant='outlined'>Bloklash Chiqarish</Button>
        <Button onClick={() => deleteUser(index)} className='m-2 w-75' color='error' variant='outlined'>Tugatish</Button>
        <Button className='m-2 w-75' color='primary' variant='outlined'> <EditUserModal editUser={editUser} index={index} /> </Button>
      </Menu>
    </div>
  );
}