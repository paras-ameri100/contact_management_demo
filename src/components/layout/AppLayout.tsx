import React from 'react'
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from '../pages/Contact';
import ChartsMaps from '../pages/ChartsMaps';

export default function AppLayout() {
  return (
    <Router>
      <div className="row">

        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='page-content px-8 py-8'>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/charts-and-maps" element={<ChartsMaps />} />
            
          </Routes>

        </div>
      </div>
    </Router>
  )
}

