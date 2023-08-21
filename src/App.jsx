import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Calculator from './components/calculator/Calculator';
import { Container } from '@mui/material';
import CRUD from './components/CRUD/CRUD';
import AutoSuggestion from './components/Auto suggestion/AutoSuggestion';
import ReactCro from './components/React Cropper/ReactCro';
import ReactTags from './components/react tags/ReactTags';

function App() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className='appContainer'>
        <Container style={{ backgroundColor: 'black' }} maxWidth='false'>
          <header>
            <button type='button' onClick={backToHome} className='backToHome'>
              Back to Home
            </button>
          </header>
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/crud' element={<CRUD />} />
          <Route path='/reactcropper' element={<ReactCro />} />
          <Route path='/react_tags' element={<ReactTags />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
