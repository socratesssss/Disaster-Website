import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './Component/Share/Button';
import Navbar from './Component/Common/Navbar';
import Dashboard from './Component/Dashboard';
import Incidents from './Component/Incidents';
import NewIncident from './Component/Incident/NewIncident';
import SecondNav from './Component/Common/SecondNav';
import IncidentPage2 from './Component/Incident/IncidentPage2';
import Page3 from './Component/Incident/Page3';
import Page4 from './Component/Incident/Page4';
import LocationPage from './Component/LocationPage';

function App() {
  return (
   <main className='font-primary bg-[#ffffff] '>
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <Navbar /> {/* Navbar component */}
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Incidents' element={<Incidents/>}/>
        <Route path='/Incidents/NewIncident' element={<NewIncident/>}/>
        <Route path='/Incidents/NewIncident/GetStarted' element={<IncidentPage2/>}/>
        <Route path='/Incidents/NewIncident/GetStarted/Page3' element={<Page3/>}/>
        <Route path='/Incidents/NewIncident/GetStarted/Page3/Page4' element={<Page4/>}/>
        <Route path='/Locations' element={<LocationPage/>}/>

     
      </Routes>
    </Router>

   </main>
  )
}

export default App