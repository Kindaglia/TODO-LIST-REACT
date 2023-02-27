import { Button, TextField, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

function Edit() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        const editIndex = localStorage.getItem('editIndex')
        const todolist = localStorage.getItem('todolist') && localStorage.getItem('todolist').length > 0 ? JSON.parse(localStorage.getItem('todolist')) : []

        if (editIndex !== null && todolist[editIndex]) {
            setTitle(todolist[editIndex].title)
            setDesc(todolist[editIndex].desc)
        }
    }, [])

    const handleBack = () => {
      navigate('/')
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }

    const handleEdit = () => {
        // Verifica che i campi "title" e "desc" siano completi
        if (title.trim().length == 0 || desc.trim().length == 0) {
          console.log( !desc);
          alert('Please fill all fields')
          return
        }
      
        const editIndex = localStorage.getItem('editIndex')
        const todolist = localStorage.getItem('todolist') && localStorage.getItem('todolist').length > 0 ? JSON.parse(localStorage.getItem('todolist')) : []
      
        const _todolist = todolist.map((todo, todoInIndex) => {
          if (todoInIndex === parseInt(editIndex)) {
            return { title, desc }
          } else {
            return todo
          }
        })
      
        localStorage.setItem('todolist', JSON.stringify(_todolist))
        navigate('/')
      }

    return (
      <div className='contentGet' id='add'>
            <Typography> Edit todo </Typography>
            <h1>
              Titolo:<br/>
              <TextField inputProps={{ style: { color: "white" } }} color="secondary" value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" />
            </h1><br/>
            Descrizione<br/>
            <TextField inputProps={{ style: { color: "white" } }} color="secondary" value={desc}  sx={{ width: 600 }} multiline  rows={4} onChange={(e) => handleDescChange(e)}  variant="filled" />
            <br/><br/>
            <Button onClick={handleBack} sx={{ marginRight: 10 }}  variant="contained" > INDIETRO </Button>
            <Button onClick={handleEdit} variant="contained" > SUBMIT </Button>
        </div>
    )
}

export default Edit
