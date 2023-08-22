import React from 'react';
import { Link } from 'react-router-dom';
import ServiceModalOne from './ServiceModal1';
import ServiceModalTwo from './ServiceModal2';
import ServiceModalThree from './ServiceModal3';
import icon1 from '../assets/img/icon/1.png'
import icon2 from '../assets/img/icon/2.png'
import icon4 from '../assets/img/icon/4.png'

const Services = () => {
    return (
        <>
            <div name="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
                <div className="blur-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">My Expertise</h4>
                                <br/>
                                <div className="divider"></div>
                                <h2 className="title">What I Do </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon1} alt="Icon" />
                                <h4>
                                  <Link to="#" data-bs-toggle="modal" data-bs-target="#serviceModalOne">
                                    Brand Design
                                  </Link>
                                </h4>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon2} alt="Icon" />
                                <h4>
                                  <Link to="#" data-bs-toggle="modal" data-bs-target="#serviceModalTwo">
                                    App Development
                                  </Link>
                                </h4>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon4} alt="Icon" />
                                <h4>
                                  <Link to="#" data-bs-toggle="modal" data-bs-target="#serviceModalThree">
                                    Digital Business Consulting
                                  </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ServiceModalOne />
                <ServiceModalTwo />
                <ServiceModalThree />
            </div>
        </>
    );
};

export default Services;
