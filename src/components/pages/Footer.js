import React from 'react';
import ME from '../../images/Ella-Microsoft-photo_adobespark.png'
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer class="bg-dark">
        <div class="pos-1">
            <img src={ME} alt="Ella Dutton smiling" oncontextmenu="return false;" />
        </div>            
        <nav class="pos-2">
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
        <div class="pos-3">
            <Link to="https://linkedin.com/in/ella-dutton">linkedin.com/in/ella-dutton</Link>
            <Link to="https://github.com/EllaCodes2021">github.com/EllaCodes2021</Link>
            <Link to="emailto:ellacodes2021@gmail.com">ellacodes2021@gmail.com</Link>
        </div>
</footer>)
}