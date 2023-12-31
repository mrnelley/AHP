import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner3 from '../assets/img/banner/7.png'

const ServiceModalThree = () => {
    return (
        <>
            <div className="modal fade" id="serviceModalThree" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="services-single-content">
                                <div className="thumb">
                                    <img src={banner3} alt="Thumb" />
                                </div>
                                <h2><u>BEST BUSINESS SERVICES</u></h2>
                                <p>I bridge the gap between strategic vision and user-centric design.
                                I collaborate with businesses to unearth untapped opportunities, streamline processes, and enhance overall efficiency.
                                Simultaneously, I delve deep into understanding user behaviors, needs, and aspirations to craft seamless and delightful experiences.
                                My approach harmonizes data-driven insights with creative ingenuity, resulting in strategies that not only optimize business outcomes but also resonate profoundly with end-users.
                                With a proven track record of transforming complex challenges into elegant solutions, I am dedicated to creating a synergy where business objectives align seamlessly with user satisfaction,
                                ultimately driving success that garners both industry recognition and customer loyalty."</p>
                                {/*<div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="content">
                                                <h4>Included Services</h4>
                                                <ul className="feature-list-item">
                                                    <li>Monthly SEO Task</li>
                                                    <li>24/7 Alltime Supporting</li>
                                                    <li>Turbo Boosting</li>
                                                    <li>Expert Team Members</li>
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
                                </div>
                                <h4>What we do?</h4>
                                <p>
                                    Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted.
                                </p>

                                <div className="faq-style-one mt-40">
                                    <h3 className="mb-25">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Where can I get analytics help?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How much does data analytics costs?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What kind of data is needed for analysis?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    */}
                                <div className="services-more mt-50">
                                    <h3>Popular Services</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-development"></i>
                                                <h4><Link to="#">Speed Optimization</Link></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-layers"></i>
                                                <h4><Link to="#">Full-stack Development</Link></h4>
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

export default ServiceModalThree;
