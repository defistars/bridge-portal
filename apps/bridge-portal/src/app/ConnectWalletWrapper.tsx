import { Button, Modal, Typography, Box } from '@mui/material';
import { useState } from 'react';

const ConnectWalletWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: '50rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        connect wallet
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            incidunt facere placeat earum, iusto, natus cumque deserunt minus
            similique quas laborum expedita, laudantium neque? Dignissimos
            delectus a at ipsum ratione!
          </Typography>
        </Box>
      </Modal>
      ;
    </div>
  );
};

export { ConnectWalletWrapper };
