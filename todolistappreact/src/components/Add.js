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

    const _todolist = localStorage.getItem('todolist') && localStorage.getItem('todolist').length > 0 ? JSON.parse(localStorage.getItem('todolist')) : []

    localStorage.setItem('todolist', JSON.stringify([..._todolist, { title, desc }]))

    navigate('/')
  }

  return (
    <div className='contentGet' id='add'>
      <Typography> ADD TODO </Typography>
      <br/>
      <h1>
        Titolo: <br/>
        <TextField id="outlined-multiline-flexible" color="secondary" inputProps={{ style: { color: "white" } }} value={title} onChange={handleTitleChange}  error={errors.title} helperText={errors.title && 'Il titolo non può essere vuoto'} />
      </h1><br/>
      Descrizione<br/>
      <TextField color="secondary" inputProps={{ style: { color: "white" } }}
        sx={{ height: 200 ,width: 400   }}
        id="outlined-multiline-flexible" 
        value={desc} onChange={handleDescChange} 
        variant="filled"  multiline 
        rows={4} error={errors.desc} 
        helperText={errors.desc && 'La descrizione non può essere vuota'}/>
      <br/><br/>
      <Button onClick={handleSubmit}  variant="contained" > SUBMIT </Button>
    </div>
  );
}

export default Add;
