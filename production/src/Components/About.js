import React from 'react';
import illustration3 from '../assets/img/illustration/3.png'
import illustration4 from '../assets/img/illustration/code.png'
import illustration5 from '../assets/img/illustration/des.png'
import illustration6 from '../assets/img/illustration/db.png'

const About = () => {
    return (
        <>
            <div name="about" className="about-style-six-area default-padding-top">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <img src={illustration3} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Me</h4>
                            <h2 className="title">I can develop <br /> & love to help people</h2>
                            <p>
                                On-Demand Digital Consulting <br/><br/>
                                <i>Down to a science,<br/>
                                Elevated to an art form.</i>
                            </p>
                            <div className="skill-list">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <img src={illustration4} alt="Thumb" />
                                        </div>
                                        <div className="content">
                                            <h4>Professional Full Stack Web Developer</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                          <img src={illustration5} alt="Thumb" />
                                        </div>
                                        <div className="content">
                                            <h4>Talented visual designer</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                          <img src={illustration6} alt="Thumb" />
                                        </div>
                                        <div className="content">
                                            <h4>Dedicated technology consultant</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
