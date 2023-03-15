import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{  display: "grid",placeContent: "center",  alignItems: "center",marginTop:"30%"}}>
      <CircularProgress color="inherit" sx={{ width:"200px",height:"200px"  }} />
    </Box>
  );
}