import React from 'react';
import CSS from '../images/logos/CSS.png'
import HTML from '../images/logos/HTML5.png'
import JavaScript from '../images/logos/JavaScript.png'
import Sunset from '../images/My-SRQ-Sunset_adobespark.png'

export default function Home() {
    return (
        <div>
            <section className="showcase">
                <div className="container bg-secondary">
                    <div className="showcase-text my-2">
                        <h1>Coding Portfolio</h1>
                        <p>
                            Hi,  My name is Ella Dutton.  I am a student learning the Fullstack method of coding.  I want to find ways to make technology that is simple to use in and out of the field.  With over 20+ years of customer service.  I have taught computer classNamees for all ages and worked off customers feedback to improve their learning experience and to make technology less intimating.  I want to combine that experience with my coding to make programs that can help even the most novice and self-proclaimed "tech illiterate" person able to use it.  I enjoy taking photos of nature and exploring nature and enjoy learning about Agricultural technology.  I hope to work with technology that can improve farming.</p>
                        <a href="./assets/PDF/Ella's Resume 2021.html" className="btn btn-outline"> My Resume</a>
                        
                    </div>
                    
                </div>
            </section>
            <section className="background bg-dark">
                <img src={Sunset} alt="Sunset on the ocean"/>
            </section>
            <section className="bg-light">
                <div className="title bg-light">
                    <h2 className="md text-left ">Known Languages</h2>
                </div>
                <div className="container-2 flex bg-dark">  
                    <div className="languages flex b4-foot">
                        <div className="card">
                            <h4>CSS</h4>
                            <img src={CSS} alt="CSS logo"/>
                        </div>
                        <div className="card">
                            <h4>HTML</h4>
                            <img src={HTML} alt="html logo"/>
                        </div>
                        <div className="card">
                            <h4>JavaScript</h4>
                            <img src={JavaScript} alt="JavaScript logo"/>
                        </div>
                    </div>
                    <div className="languages flex" >
                        <div className="text-center flex">
                            {/* <div className="showcase-form-2 bg-light card" id="form">
                                <h3 id="contact-me" className="md">Contact Me</h3>
                                <form>
                                    <div className="form-control">
                                        <input type="text" name="name" placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="company" placeholder="Company's Name" required/>
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Your Email" required/>
                                    </div>
                                    
                                <br/>
                                    <input type="submit" value="Send" className="btn btn-light-2"/>
                                </form>
                            </div>       */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
        );
}
