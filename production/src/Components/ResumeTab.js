import React from 'react';
import chart from '../assets/img/illustration/chart.gif';
import db from '../assets/img/illustration/db.gif';
import design from '../assets/img/illustration/design.gif';

const ResumeTab = () => {
    return (
        <>
            <div className="tab-content resume-tab-content" id="nav-tabContent">

                {/* tab content 1
                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="biography-table">
                                <li>
                                    <h5>Name</h5>
                                    <p>Istiak Ahmed</p>
                                </li>
                                <li>
                                    <h5>Birthday</h5>
                                    <p>24 March, 1994</p>
                                </li>
                                <li>
                                    <h5>Age</h5>
                                    <p> 29</p>
                                </li>
                                <li>
                                    <h5>Address</h5>
                                    <p>Street Oswego NY 13126 USA</p>
                                </li>
                                <li>
                                    <h5>Email</h5>
                                    <p>easton@gmail.com</p>
                                </li>
                                <li>
                                    <h5>Phone</h5>
                                    <p>+(778)33444564</p>
                                </li>
                                <li>
                                    <h5>Skype</h5>
                                    <p>program540</p>
                                </li>
                                <li>
                                    <h5>Freelance</h5>
                                    <p>Available</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                */}
                {/* tab content 2 */}
                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                    <div className="row align-center">
                        <div className="col-lg-12">
                            <ul className="skill-table">
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Engineering & Dev Ops</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>75%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated"
                                                    role="progressbar" data-width="75" aria-valuenow="75"
                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Small Business Branding & Marketing Development</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>84%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated2"
                                                    role="progressbar"
                                                    data-width="84" aria-valuenow="84"
                                                    aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "84%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Full-Stack Web Application Design and Development</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>92%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated3" role="progressbar" data-width="92" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* tab content 3 */}
                <div className="tab-pane fade" id="tab2" role="tabpanel"
                     aria-labelledby="nav-id-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="education-table">
                                <li>
                                    <h4>72 credits - Computer Science</h4>
                                    <h5>Howard University</h5>
                                    <span>2013 - 2016</span>
                                    <h5><i>Studied conventional data structures & algorithms in C++, Python, and Java.</i></h5>
                                    <h4>Extracurricular Activities:</h4>
                                    <h5>
                                      <br/>National Society of Black Engineers Executive Board
                                      <br/>Howard University Student Association Senate
                                      <br/>Drew Hall Honor Society
                                      <br/>Drew Hall Step Team Mentorship Group
                                      <br/>George Washington Carver (GDUB) Mentorship and Community Outreach 501c3 non-profit
                                      <br/>Aaron Bonner Scholarship Foundation
                                      <br/>Air Force Reserve Officer Training Corps
                                      <br/>Arnold Air Society
                                    </h5>
                                </li>
                                <li>
                                    <h4>Web Development Immersive Graduate</h4>
                                    <h5>General Assembly</h5>
                                    <span>2016 WDI11</span>
                                    <h4><i>General Assembly's web development immersive.
                                    Full stack app development using MongoDB, ExpressJS,
                                    Angular/React, and Node. Varied experience in Ruby on Rails,
                                    Sinatra, MeteorJS, SQL, and more.</i>
                                    </h4>
                                </li>
                                <li>
                                    <h4>Community Health Worker CEU</h4>
                                    <h5>Prince Georges County Community College</h5>
                                    <span>2019-2020</span>
                                    <h4><i>One of the first comprehensive courses for
                                    state certification as a community health worker
                                    in the state of Maryland.</i></h4>
                                </li>
                                <li>
                                    <h4><i>**BS Computer Science</i></h4>
                                    <h5>Southern New Hampshire University</h5>
                                    <span>2022 - Present</span>
                                    <h4><i>Looking to complete final 50 hours of coursework
                                    for BSCS.</i></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeTab;
