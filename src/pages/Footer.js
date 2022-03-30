import React from 'react';
import ME from '../images/Ella-Microsoft-photo_adobespark.png'



export default function Footer() {
    return (
        <footer className="bg-dark">
        <div className="pos-1">
            <img src={ME} alt="Ella Dutton smiling" />
        </div>            
        <nav className="pos-2">
            <ul>
                <li>
                <a to="/">About Me</a>
                </li>
                <li>
                <a to="/Resume">My Resume</a>
                </li>                    
                <li>
                <a to="/Projects">My Projects</a>
                </li>
                <li>
                <a to="#contact-me">Contact Me</a>
                </li>
            </ul>
        </nav>
        <div className="pos-3">
            <a to="https://linkedin.com/in/ella-dutton">linkedin.com/in/ella-dutton</a>
            <a to="https://github.com/EllaCodes2021">github.com/EllaCodes2021</a>
            <a to="emailto:ellacodes2021@gmail.com">ellacodes2021@gmail.com</a>
        </div>
</footer>)
}