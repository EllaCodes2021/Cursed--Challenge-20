import React from 'react';



function NavTabs(props) {
  return (
    <header>
      <h1 className="logo">Ella Dutton</h1>
      <nav className="navbar">
        <ul>
          <li>
            <a 
            className={props.pageChoice == 'About' ? 'choice':('')}
            onClick={()=> props.setPageChoice('About')} >About Me</a>
          </li>
          <li>
          <a 
            className={props.pageChoice == 'Resume' ? 'choice':('')}
            onClick={()=> props.setPageChoice('Resume')}>My Resume</a>
          </li>                    
          <li>
          <a 
            className={props.pageChoice == 'Projects' ? 'choice':('')}
            onClick={()=> props.setPageChoice('Projects')}>My Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
