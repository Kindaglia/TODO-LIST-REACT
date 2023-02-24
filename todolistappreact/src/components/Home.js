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

  return (
    <>

    <br /><br />
      <Button onClick={() => {navigate('add')}} variant="contained">ADD</Button><br /><br />
      {
        blogs && blogs.length > 0 ?
          blogs.map(blog => {
            return (
              <>
                title - {blog.title}  <br />
                Description - {blog.desc} <br /><br />
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