import React from "react";
import Dhiraj from "../assets/img/dhiraj.jpg"
const About = () => {
    return (
        <div>
            <section className="about section">
                <h2 className="about-heading">About me</h2>
                <div className="about-container">
                    <div className="about-col-left">
                        <div className="img-container">
                            <img src={Dhiraj} alt="" />
                        </div>
                    </div>
                    <div className="about-col-right">
                        <h2>Hello,</h2>
                        <p>I am Dhiraj verma, web developer from Delhi, India. I have rich experience in web site design and building and costomization, also I am good at React</p>
                        <div className="about-row">
                            <ul className="top-row">
                                <li><span>Name: <span>Dhiraj verma</span></span></li>
                                <li><span>Birthday: <span>20/10/2002</span></span></li>
                            </ul>
                            <ul className="second-row">
                                <span>Location: <span>Delhi, India</span></span>
                                <span>Email: <span>dhirajv418@gmail.com</span></span>
                            </ul>
                        </div>
                        <div className="about-btn">
                            <div className="home-btn">
                                <a href="Home" id="btn1" className="anchor-btn">View Portfolio</a>
                                <a href="Home" id="btn2" className="anchor-btn">Hire me</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about skills section">
                <h2 className="about-heading">My Skills</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the behind texts. Separated they live in Boomarks grove right at the coast of the Semantics</p>
                <div className="skill-col">
                    <ul>
                        <li><span>React</span><span>90%</span></li>
                        <li><span>Java</span><span>85%</span></li>
                        <li><span>JavaScript</span><span>85%</span></li>
                    </ul>
                    <ul>
                        <li><span>Html, Css</span><span>90%</span></li>
                        <li><span>MongoDB, MySql</span><span>85%</span></li>
                        <li><span>BootStrap</span><span>85%</span></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default About