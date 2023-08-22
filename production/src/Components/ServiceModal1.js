import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner1 from '../assets/img/banner/5.jpg';
import designVideo from '../assets/img/illustration/3.gif';

const ServiceModalOne = () => {
    return (
        <>
            <div className="modal fade" id="serviceModalOne" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="services-single-content">
                                <div className="thumb">
                                    <img src={banner1} alt="Thumb" />
                                </div>
                                <h2><u>BEST DESIGNER SERVICES</u></h2>
                                <p> I craft digital experiences that transcend the ordinary.
                                As an seasoned web designer, my mission is to blend innovative design with seamless functionality.
                                Through a harmonious fusion of striking visuals, intuitive user interfaces, and cutting-edge technologies;
                                I create online spaces that not only captivate visitors but also drive results.
                                Each pixel is meticulously placed to ensure the perfect balance between aesthetics and user-centered design,
                                resulting in brands that not only win hearts and minds, but also leave a lasting impact on users.
                                I don't just design websites; I sculpt immersive journeys that engage, inspire, and elevate brands to new heights in the digital realm.
                               </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <img src={designVideo}/>
                                        </div>
                                        <div className="col-lg-8 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                    No matter the challenge, I'm here
                                                    to fuse creativity and strategy into
                                                    design solutions that not only solve
                                                    problems but also set new standards,
                                                    earning <b>your</b> brand the recognition
                                                    it deserves.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*
                                // <div className="faq-style-one mt-40">
                                //     <h3 className="mb-25">Common Question for this project</h3>
                                //     <div className="accordion" id="faqAccordion">
                                //         <div className="accordion-item">
                                //             <h2 className="accordion-header" id="headingOne">
                                //                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                //                     brand seeks differentiation in a crowded market
                                //                 </button>
                                //             </h2>
                                //             <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                //                 <div className="accordion-body">
                                //                     <p>
                                //                         Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                //                     </p>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //         <div className="accordion-item">
                                //             <h2 className="accordion-header" id="headingTwo">
                                //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                //                     user engagement be a concern
                                //                 </button>
                                //             </h2>
                                //             <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                //                 <div className="accordion-body">
                                //                     <p>
                                //                         Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                //                     </p>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //         <div className="accordion-item">
                                //             <h2 className="accordion-header" id="headingThree">
                                //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                //                     goal is to navigate the ever-evolving digital landscape,
                                //                 </button>
                                //             </h2>
                                //             <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                //                 <div className="accordion-body">
                                //                     <p>
                                //                         Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                //                     </p>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                */}

                                <div className="services-more mt-50">
                                    <h3>Popular Services</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-development"></i>
                                                <h4><Link to="#">Logo Design</Link></h4>
                                                <p>
                                                 A good logo can redefine & bring your online-identity to life.
                                                 It is, no doubt, a good starting point to realizing an elevated digital brand.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-layers"></i>
                                                <h4><Link to="#">Front-end Development</Link></h4>

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

export default ServiceModalOne;
