import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const App = () => 
    <Router> 
        <div>
            <NavTabs />
            <Routes>
                <Route path='/' element={<About />}/>
                <Route path='/Resume' element={<Resume />}/>
                <Route path='/Projects' element={<Projects />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </div>
    </Router> 

export default App;
