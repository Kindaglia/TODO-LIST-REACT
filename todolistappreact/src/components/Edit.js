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
        const blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        if (editIndex !== null && blogs[editIndex]) {
            setTitle(blogs[editIndex].title)
            setDesc(blogs[editIndex].desc)
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
        const blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []
      
        const _blogs = blogs.map((blog, blogInIndex) => {
          if (blogInIndex === parseInt(editIndex)) {
            return { title, desc }
          } else {
            return blog
          }
        })
      
        localStorage.setItem('blogs', JSON.stringify(_blogs))
        navigate('/')
      }

    return (
        <>
            <Typography> Edit BLOG </Typography>
            <TextField value={title} onChange={(e) => handleTitleChange(e)} label="Title" variant="filled" /> <br />
            <TextField value={desc} onChange={(e) => handleDescChange(e)} label="Description" variant="filled" />
            <Button onClick={handleEdit} variant="contained" > SUBMIT </Button>
        </>
    )
}

export default Edit
