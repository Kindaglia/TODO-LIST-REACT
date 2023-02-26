import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

function Home() {

  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [deleteIndex, setDeleteIndex] = useState(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  useEffect(() => {
      const blogs = localStorage.getItem('blogs')
      setBlogs(JSON.parse(blogs))
  }, [])

  const handleDelete = (blogOutIndex) => {
      setDeleteIndex(blogOutIndex)
      setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    const _blogs = blogs.filter((blog, blogInIndex) => {
      if (blogInIndex !== deleteIndex) {
        return blog
      } else {
        return null
      }
    }).filter((blog) => blog !== null)
    
      console.log(_blogs)
      setBlogs(_blogs)
      localStorage.setItem('blogs', JSON.stringify(_blogs))
      setDeleteIndex(null)
      setDeleteDialogOpen(false)
  }

  const handleCancelDelete = () => {
      setDeleteIndex(null)
      setDeleteDialogOpen(false)
  }

  const handleEdit = (blogIndex) => {
      localStorage.setItem('editIndex', blogIndex)
      navigate('/edit')
  }

  return (
    <>
      <br /><br />
      <Button onClick={() => {navigate('add')}} variant="contained">ADD</Button><br /><br />
      {
        blogs && blogs.length > 0 ?
        blogs.map((blog, blogIndex) => {
          return (
            <div key={blogIndex}>
              title - {blog.title} / Description - {blog.desc} 
              <EditIcon style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(blogIndex)} />
              <DeleteIcon style={{ color: 'red' }} onClick={() => handleDelete(blogIndex)} />
            </div>
          )
        }) :
        "No data Found"
      }
      <Dialog open={deleteDialogOpen}>
        <DialogTitle>Conferma cancellazione</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Annulla</Button>
          <Button onClick={handleConfirmDelete}>Conferma</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Home
