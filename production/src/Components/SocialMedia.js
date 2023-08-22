import React from 'react';

const SocialMedia = () => {
    return (
        <>
            <ul>
                <li className="facebook">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="ri-facebook-fill"></i>
                    </a>
                </li>
                <li className="instagram">
                    <a href="https://www.instagram.net/" target="_blank" rel="noreferrer" >
                        <i className="ri-instagram-fill"></i>
                    </a>
                </li>
                <li className="twitter">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
                        <i className="ri-twitter-fill"></i>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default SocialMedia;
