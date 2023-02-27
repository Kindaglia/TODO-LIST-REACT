import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

function Home() {

  const navigate = useNavigate()
  const [todolist, settodolist] = useState([])
  const [deleteIndex, setDeleteIndex] = useState(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  useEffect(() => {
      const todolist = localStorage.getItem('todolist')
      settodolist(JSON.parse(todolist))
  }, [])

  const handleDelete = (todoOutIndex) => {
      setDeleteIndex(todoOutIndex)
      setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    const _todolist = todolist.filter((todo, todoInIndex) => {
      if (todoInIndex !== deleteIndex) {
        return todo
      } else {
        return null
      }
    }).filter((todo) => todo !== null)
    
      console.log(_todolist)
      settodolist(_todolist)
      localStorage.setItem('todolist', JSON.stringify(_todolist))
      setDeleteIndex(null)
      setDeleteDialogOpen(false)
  }

  const handleCancelDelete = () => {
      setDeleteIndex(null)
      setDeleteDialogOpen(false)
  }

  const handleEdit = (todoIndex) => {
      localStorage.setItem('editIndex', todoIndex)
      navigate('/edit')
  }

  return (
    <>
      <br /><br />
      <Button onClick={() => {navigate('add')}} variant="contained">ADD</Button><br /><br />
      {
        todolist && todolist.length > 0 ?
        todolist.map((todo, todoIndex) => {
          return (
            <div key={todoIndex}>
              title - {todo.title} / Description - {todo.desc} 
              <EditIcon style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(todoIndex)} />
              <DeleteIcon style={{ color: 'red' }} onClick={() => handleDelete(todoIndex)} />
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
