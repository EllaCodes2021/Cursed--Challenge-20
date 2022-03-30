import React from 'react';
import AtAnime from '../../images/Atanime.png';
import Concierge from '../../images/Concierge-mini.png';
import Runbuddy from '../../images/Runbuddy-Demo.png';
import Employee from '../../images/Employee-tracker.png';
import Plenty from '../../images/plenty-o-coders.png';


import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="project bg-secondary">
                <img src={AtAnime} alt="AtAnime - Interactive MERN Full Stack App React" />
                <Link href="https://github.com/EllaCodes2021/A-T-Anime"> AtAnime - anime list app </Link>
                <Link href= "https://atanime.herokuapp.com/"> AtAnime - Interactive MERN Full Stack App React - Group Project</Link>

        </section>
        <section className="container-3 flex bg-light">
                <div className="project-2 bg-light">
                    <img src={Concierge} alt="Portfolio preview" />
                    <Link href="https://ellacodes2021.github.io/Team-Indecisive-IDK/">Concierge - Interactive Front-End Group Project</Link>
                    <Link href= "https://ellacodes2021.github.io/Team-Indecisive-IDK/"> Concierge Group Project</Link>

                </div>
                <div className="project-2 bg-light">
                    <img src={Runbuddy} alt="Run Buddy Class work preview" />
                    <Link href="https://ellacodes2021.github.io/run-buddy/">Run Buddy Classwork Project - Html Project</Link>
                    <Link href= "https://ellacodes2021.github.io/run-buddy/"> Runbuddy Classwork</Link>
                </div>
                <div className="project-2 bg-light">
                    <img src={Employee} alt="Employee Tracker" />
                    <Link href="https://github.com/EllaCodes2021/Challenge12"> Employee Tracker - MySQL Backend Project</Link>
                </div>
                <div className="project-2 bg-light">
                    <img src={Plenty} alt="Plenty o Coders" />
                    <Link href="https://github.com/EllaCodes2021/plenty-o-coders"> Plenty 'o' Coders - MySQL Group Project</Link>
                    <Link href= "https://dashboard.heroku.com/apps/plenty-o-coders"> Plenty o Coders </Link>
                </div>
        </section>
    </div>
  );
}
