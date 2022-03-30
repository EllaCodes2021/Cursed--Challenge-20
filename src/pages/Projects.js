import React from 'react';
import AtAnime from '../images/AtAnime.png';
import Concierge from '../images/Concierge-mini.png';
import Runbuddy from '../images/Runbuddy-Demo.png';
import Employee from '../images/Employee-tracker.png';
import Plenty from '../images/plenty-o-coders.png';



export default function Projects() {
  return (
    <div>
      <section className="project bg-secondary">
                <img src={AtAnime} alt="AtAnime - Interactive MERN Full Stack App React" />
                <a href="https://github.com/EllaCodes2021/A-T-Anime"> AtAnime - anime list app </a>
                <a href= "https://atanime.herokuapp.com/"> AtAnime - Interactive MERN Full Stack App React - Group Project</a>

        </section>
        <section className="container-3 flex bg-light">
                <div className="project-2 bg-light">
                    <img src={Concierge} alt="Portfolio preview" />
                    <a href="https://ellacodes2021.github.io/Team-Indecisive-IDK/">Concierge - Interactive Front-End Group Project</a>
                    <a href= "https://ellacodes2021.github.io/Team-Indecisive-IDK/"> Concierge Group Project</a>

                </div>
                <div className="project-2 bg-light">
                    <img src={Runbuddy} alt="Run Buddy Class work preview" />
                    <a href="https://ellacodes2021.github.io/run-buddy/">Run Buddy Classwork Project - Html Project</a>
                    <a href= "https://ellacodes2021.github.io/run-buddy/"> Runbuddy Classwork</a>
                </div>
                <div className="project-2 bg-light">
                    <img src={Employee} alt="Employee Tracker" />
                    <a href="https://github.com/EllaCodes2021/Challenge12"> Employee Tracker - MySQL Backend Project</a>
                </div>
                <div className="project-2 bg-light">
                    <img src={Plenty} alt="Plenty o Coders" />
                    <a href="https://github.com/EllaCodes2021/plenty-o-coders"> Plenty 'o' Coders - MySQL Group Project</a>
                    <a href= "https://dashboard.heroku.com/apps/plenty-o-coders"> Plenty o Coders </a>
                </div>
        </section>
    </div>
  );
}
