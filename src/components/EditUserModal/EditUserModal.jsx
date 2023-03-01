import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditUserModal({editUser, index}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[inputValue, setInputValue] = React.useState({})
  

  return (
    <div>
      <Button onClick={handleOpen}>Tahrirlash</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h4>Tahrirlash</h4>
            <TextField 
                label={'User'}
                className='my-2'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <TextField 
                label={'Telefon'}
                className='my-2'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <TextField 
                label={'JShShIR'}
                className='my-2'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <TextField 
                label={'Qurilma'}
                className='my-2'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={() => editUser(index, inputValue )} variant='contained' className='d-block'>Save</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}