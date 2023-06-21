import React from 'react';
import Class from './Class';
import { Box } from '@mui/material';

const Canvas = () => {
  return (
    <Box sx={{borderColor: 'black', borderWidth: '10px', border: 'solid'}}>
      <Class></Class>
    </Box>
  );
};

export default Canvas;