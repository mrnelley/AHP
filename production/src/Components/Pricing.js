import React from 'react';
import { Link } from 'react-scroll';
import shape10 from '../assets/img/shape/10.png'
import shape2 from '../assets/img/shape/2.webp'


const Pricing = () => {
    return (
        <>
            <div name="pricing" className="pricing-area default-padding-top">
                <div className="container">
                    <div className="pricing-box">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="heading-left">
                                    <div className="left-info">
                                        <h5 className="sub-title">Pricing</h5>
                                        <h2 className="title">The best pricing plans <br /> to help your business</h2>
                                        <div className="heading-shape">
                                            <img src={shape10} alt="Shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="save-amount mt-100 mt-md-50">
                                    <h4>Save up to <strong>10%</strong> on your app with code:
                                    <br/> ' AHP2023 '</h4>
                                    <img src={shape2} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="pricing-style-one">
                                    <div className="content">
                                      <div style={{ textAlign: "left" }}>
                                        <h4>Static App Development</h4>
                                        <ul>
                                            <li>Single Page Web Application</li>
                                            <li>Responsive Design Customization</li>
                                            <li>Brand Development</li>
                                        </ul>
                                      </div>
                                        <Link className="btn mt-25 btn-sm circle btn-theme" to="contact">Book a Consultation Now</Link>
                                    </div>
                                    <div className="price">
                                        <h2>Starting at<sup>$</sup>499</h2>
                                        <i className="ti-wordpress"></i>
                                    </div>
                                </div>
                                <div className="pricing-style-one">
                                    <div className="content">
                                      <div style={{ textAlign: "left" }}>
                                        <h4>Dynamic Full Stack Design</h4>
                                        <ul>
                                            <li>Dynamic web application</li>
                                            <li>Custom API implementation</li>
                                            <li>Responsive Design & Brand Customization</li>
                                        </ul>
                                      </div>
                                        <Link className="btn mt-25 btn-sm circle btn-light" to="contact">Book a Consultation Now</Link>
                                    </div>
                                    <div className="price">
                                        <h2>Starting at<sup>$</sup>599</h2>
                                        <i className="ti-html5"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
