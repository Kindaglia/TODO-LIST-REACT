import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


function Add() {

  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [desc,setDesc] =  useState('') 
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsFormValid(title !== '' && desc !== '');
  }, [title, desc]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setErrors(prev => ({...prev, title: e.target.value === ''}))
  }

  const handleDescChange = (e) => {
    setDesc(e.target.value)
    setErrors(prev => ({...prev, desc: e.target.value === ''}))
  }

  const handleSubmit = () => {
    if (!isFormValid) {
      alert('Il titolo e la descrizione non possono essere vuoti.');
      return;
    }

    console.log({ title, desc })

    const _blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

    localStorage.setItem('blogs', JSON.stringify([..._blogs, { title, desc }]))

    navigate('/')
  }

  return (
    <div>
      <Typography> ADD BLOG </Typography>
      <TextField id="outlined-multiline-flexible" value={title} onChange={handleTitleChange} label="Title" error={errors.title} helperText={errors.title && 'Il titolo non può essere vuoto'} />
      <TextField id="outlined-multiline-flexible" value={desc} onChange={handleDescChange} label="Description" variant="filled"  multiline  rows={4} error={errors.desc} helperText={errors.desc && 'La descrizione non può essere vuota'} />
      <Button onClick={handleSubmit}  variant="contained" > SUBMIT </Button>
    </div>
  );
}

export default Add;
