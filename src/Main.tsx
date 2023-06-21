import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import Canvas from './features/Canvas';

const Main = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} sx={{height: '100vh'}}>
      <Box sx={{minWidth: '150px', maxWidth: '150px', backgroundColor: 'grey'}}>Side</Box>
      <Box sx={{width: '100%', padding: '10px'}} >
        <Canvas></Canvas>
      </Box>
    </Stack>
  );
};

export default Main;