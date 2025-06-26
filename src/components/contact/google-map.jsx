import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
                <div className="tp-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.391572633368!2d67.12309031095067!3d24.88462167782137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3397205af7677%3A0x9c2d3bab97965b42!2sFAMZ!5e0!3m2!1sen!2s!4v1726632564775!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;