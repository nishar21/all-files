
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
//import HomePage from './pages/HomePage';
//import LoginPage from './pages/LoginPage';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      
    </Routes>
  </BrowserRouter>
}
export default App
