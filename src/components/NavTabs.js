import React from 'react';
import { Link } from 'react-router-dom';



function NavTabs() {
  return (
    <header>
      <h1 classname="logo">Ella Dutton</h1>
      <nav classname="navbar">
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/Resume">My Resume</Link>
          </li>                    
          <li>
            <Link to="/Projects">My Projects</Link>
          </li>
          <li>
            <Link to="#contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
