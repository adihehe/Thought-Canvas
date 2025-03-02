import React from 'react'
// import { Container, PostForm } from '../components'
import Container from '../components/container/Container'
// import PostForm from '../components/PostForm'
import PostForm from "../components/postForm/PostformN"

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost