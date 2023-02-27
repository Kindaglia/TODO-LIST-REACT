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

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }

    const handleEdit = () => {
        // Verifica che i campi "title" e "desc" siano completi
        if (!title || !desc) {
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
        <>
            <Typography> Edit todo </Typography>
            <TextField value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" /> <br />
            <TextField value={desc} onChange={(e) => handleDescChange(e)} label="Description" variant="filled" />
            <Button onClick={handleEdit} variant="contained" > SUBMIT </Button>
        </>
    )
}

export default Edit
