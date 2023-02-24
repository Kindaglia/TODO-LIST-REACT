import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


function Add() {

  const navigate = useNavigate()
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

    const _blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

    localStorage.setItem('blogs', JSON.stringify([..._blogs, { title, desc }]))

    navigate('/')
  }

  return (<div>
     <Typography> ADD BLOG </Typography>
      <TextField value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" />
      <TextField value={desc} onChange={(e) => handleDescChange(e)} label="Description" variant="filled" />  
      <Button onClick={handleSubmit}  variant="contained" > SUBMIT </Button>
  </div>
   
  )
}

export default Add