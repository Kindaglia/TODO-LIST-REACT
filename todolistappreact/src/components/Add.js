import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function Add() {
  return (<div>
    <Typography> ADD TODO </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="standard" />
      <TextField id="filled-basic" label="Filled" variant="standard" />
  </div>
   
  )
}

export default Add