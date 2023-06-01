import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

// marginLeft: '320px' - width of sidebar
const Loader: FC = () => {
  return (
    <Backdrop sx={{
      color: '#fff',
      zIndex: (theme) => theme.zIndex.drawer + 1
    }} open
    >
      <CircularProgress color="inherit" sx={{ marginLeft: '320px' }} />
    </Backdrop>
  );
};

export default Loader;
