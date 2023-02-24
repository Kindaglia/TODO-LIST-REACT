import { Button } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

function Home() {

  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogs = localStorage.getItem('blogs')
        setBlogs(JSON.parse(blogs))
    }, [])

    const handleDelete = (blogOutIndex) => {
      const _blogs = blogs.filter((blog, blogInIndex) => {
          if (blogInIndex !== blogOutIndex) {
              return blog
          }
      })
      console.log(_blogs)
      setBlogs(_blogs)
      localStorage.setItem('blogs', JSON.stringify(_blogs))
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
          blogs.map((blog,blogIndex) => {
            return (
              <><br />
                title - {blog.title} /
                Description - {blog.desc} 
                <EditIcon style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(blogIndex)} ></EditIcon>
                <DeleteIcon style={{ color: 'red' }} onClick={() => handleDelete(blogIndex)} ></DeleteIcon> 
              </>
              
            )
              
          
          })
          :
          "No data Found"
      }
    </>
  )
}

export default Home