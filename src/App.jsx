import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './Component/Share/Button';
import Navbar from './Component/Common/Navbar';
import Dashboard from './Component/Dashboard';
import Incidents from './Component/Incidents';
import NewIncident from './Component/NewIncident';

function App() {
  return (
   <main className='font-primary bg-[#ffffff] '>
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <Navbar /> {/* Navbar component */}
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Incidents' element={<Incidents/>}/>
        <Route path='/Incident/NewIncident' element={<NewIncident/>}/>

     
      </Routes>
    </Router>

   </main>
  )
}

export default App