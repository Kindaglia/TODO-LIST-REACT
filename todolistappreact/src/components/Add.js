import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";


function Add() {

  const [title,setTitle] = useState('')
  const [desc,setDesc] =  useState('') 

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDescChange = (e) => {
    setDesc(e.target.value)
  }
  const handleSubmit = () => {
    console.log({ title, desc })
}

  return (<div>
     <Typography> ADD BLOG </Typography>
      <TextField value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" /> <br />
      <TextField value={desc} onChange={(e) => handleDescChange(e)} label="Description" variant="filled" />   <br />
      <Button onClick={handleSubmit} variant="contained" > SUBMIT </Button>
  </div>
   
  )
}

export default Add