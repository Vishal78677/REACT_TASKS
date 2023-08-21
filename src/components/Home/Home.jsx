import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Home = () => {
  return (
    <div className='homeContainer'>
        <Container maxWidth="xl" className='mainCon'>
            
            <div className='projectWrapper'>

               <Link to="/todo" >
                  <button className='btnn'>Todo App</button>
               </Link>

               <Link to="/calculator" >
                  <button className='btnn'>Calculator</button>
               </Link>

               <Link to="/crud" >
                  <button className='btnn'>Crud opt</button>
               </Link>
               <Link to="/reactcropper" >
                  <button className='btnn'>Cropper</button>
               </Link>
               <Link to="/react_tags" >
                  <button className='btnn'>Input Tags</button>
               </Link>
            </div>
        </Container>
    </div>
  )
}

export default Home