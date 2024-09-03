import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './HomeScreen.jsx';
import CreateUserScreen from './CreateUserScreen.jsx';
import Update from './Update.jsx';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createUserScreen' element={<CreateUserScreen />} />
        <Route path='/edit/:id' element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
