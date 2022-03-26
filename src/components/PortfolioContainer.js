import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router> 
    <div>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/Resume' element={<Resume />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
    </Router> 
  );
}
