import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './Component/Share/Button';
import Navbar from './Component/Common/Navbar';

function App() {
  return (
   <main className='font-primary bg-[#ffffff] '>
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Define routes for different paths */}
      
      </Routes>
    </Router>

   </main>
  )
}

export default App