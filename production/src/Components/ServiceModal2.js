import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner2 from '../assets/img/banner/4.jpg'

const ServiceModalTwo = () => {
    return (
        <>
            <div className="modal fade" id="serviceModalTwo" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="services-single-content">
                                <div className="thumb">
                                    <img src={banner2} alt="Thumb" />
                                </div>
                                <h2><u>BEST DEVELOPER SERVICES</u></h2>
                                <p>As an app developer, I specialize in turning visionary concepts into tangible digital realities.
                                   I sculpt code and functionality to craft apps that redefine user experiences and push the boundaries of innovation.
                                   My expertise lies in seamlessly blending elegant design with robust architecture, ensuring that every tap, click, and swipe feels intuitive and rewarding.
                                   With a keen eye on emerging technologies and a commitment to user-centered development, I bring ideas to life in a way that not only intentioanlly endears clients
                                   but also seeks to disrupt my clients' industries. From concept to execution, I am dedicated to creating apps that resonate, inspire, and ultimately enrich the lives of business owners and end-users worldwide.
                                </p>
                              {/*  <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="content">
                                                <h4>Included Services</h4>
                                                <ul className="feature-list-item">
                                                    <p><li>Monthly SEO Task</li>
                                                    <li>24/7 Alltime Supporting</li>
                                                    <li>Turbo Boosting</li>
                                                    <li>Expert Team Members</li></p>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h4>The Challange</h4>
                                                <p>
                                                    TBD
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>*/}
                                <div className="faq-style-one mt-40">
                                    <h3 className="mb-25">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    We're concerned about the user engagement in our app. People seem to download it, but not many are sticking around to use it regularly.
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                      I understand your concern about user engagement. Building a successful app goes beyond just downloads.
                                                      To address this challenge, we'll focus on enhancing the user experience. By analyzing user behavior and feedback,
                                                      we can identify pain points and optimize the app's interface for intuitive navigation. Implementing personalized push notifications
                                                      and rewards for consistent usage can also encourage users to return. Remember, a seamless and engaging experience is key to retaining users and turning them into loyal advocates of your app.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  Our app is functioning well on Android, but it's facing various issues on iOS devices. We want a consistent experience across both platforms.
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        I acknowledge the importance of platform consistency for your app's success.
                                                        Achieving this requires careful attention to the nuances of each platform.
                                                        I propose a comprehensive audit of the iOS version to identify and rectify any discrepancies.
                                                        We'll work on optimizing the app's performance for iOS, making sure it follows Apple's design guidelines and best practices.
                                                        Regular updates and testing across both platforms will be crucial to maintain a uniform user experience, resulting in increased user satisfaction and positive reviews.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Our app's user interface looks outdated compared to competitors. We want a modern and visually appealing design.
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        I completely understand the importance of a modern and visually appealing UI in today's competitive app market.
                                                        To tackle this challenge, we'll embark on a design overhaul while maintaining a user-centric approach.
                                                        Through wireframing and prototyping, we'll craft a fresh and intuitive interface that aligns with your brand identity and resonates with your target audience.
                                                        By incorporating the latest design trends, intuitive navigation, and a pleasing color palette, we can revitalize your app's look and feel. 
                                                        A visually captivating UI not only attracts new users but also enhances the overall user experience, resulting in higher engagement and satisfaction.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-more mt-50">
                                    <h3>Popular Services</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-development"></i>
                                                <h4><Link to="#">UI/UX Design</Link></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-layers"></i>
                                                <h4><Link to="#">Back-end Development</Link></h4>
                                            </div>
                                        </div>
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

export default ServiceModalTwo;
