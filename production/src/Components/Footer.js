import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-social">
                                <li className="facebook">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <i class="ri-facebook-line"></i>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
                                        <i className="ri-twitter-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-end">
                            <p>&copy; {(new Date().getFullYear())} Angry Hippo Productions LLC. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
