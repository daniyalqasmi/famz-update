import React, { useRef } from 'react';
// import icon from "@assets/img/icon/icon-2.png";
import icon from "../../../../public/assets/img/icon/icon-2.png";
import Image from 'next/image';
import Slider from "react-slick";

const slider_data = [
    { id: 1, title: <> <span>Presence</span></> },
    { id: 2, title: <>Commercial <span>Aircraft</span></> },
    { id: 3, title: <>Executive <span>Aircraft</span></> },
    { id: 4, title: <>Aerospace <span>Metals</span></> },
    { id: 5, title: <>Defense <span>Solutions</span></> },
    { id: 6, title: <>Marine <span>Alloy</span></> },
    { id: 7, title: <>Equipment & <span>Parts Supply</span></> },
    { id: 8, title: <>Repairs & <span>Overhauls</span></> },
    {
        id: 9, title: <>ICU
            <span>Beds</span></>
    },
    {
        id: 10, title: <>Orthopedic
            <span>Beds</span></>
    },
    {
        id: 11, title: <>Pediatric
            <span>Beds</span></>
    },
    {
        id: 12, title: <>Manual
            <span>Beds</span></>
    },
    {
        id: 13, title: <>Dialysis
            <span>Chair</span></>
    },
    {
        id: 14, title: <>Transfusion
            <span>Chair</span></>
    },
    {
        id: 15, title: <>Dental Unit
            <span>Chair</span></>
    },
    {
        id: 16, title: <>Examination
            <span>Couch</span></>
    },
    {
        id: 17, title: <>OT
            <span>Table</span></>
    },
    {
        id: 18, title: <>Delivery
            <span>Table</span></>
    },
    {
        id: 19, title: <>OT 
            <span>Light</span></>
    },
    {
        id: 20, title: <>ENT 
            <span>Unit</span></>
    },
    {
        id: 21, title: <>Short Wave 
            <span>Diathermy</span></>
    },
    {
        id: 22, title: <>Surgical 
            <span>Diathermy</span></>
    },
    {
        id: 23, title: <>Patient 
            <span>Monitor</span></>
    },
    {
        id: 24, title: <>Infant 
            <span>Incubator</span></>
    },
    {
        id: 25, title: <>Transport 
            <span>Incubator</span></>
    },
    {
        id: 26, title: <>Suction 
            <span>Machine</span></>
    },
    {
        id: 27, title: <>ECG  
            <span>Machine</span></>
    },
    {
        id: 28, title: <>Medical Graded   
            <span>LCDs / LEDs</span></>
    },
    {
        id: 29, title: <>Fetus   
            <span>Doppler</span></>
    },
    {
        id: 30, title: <>ETT   
            <span>Machine</span></>
    },
    {
        id: 31, title: <>Infant
            <span>Warmer</span></>
    },
    {
        id: 32, title: <>Ventilator   
            <span></span></>
    },
]

const setting = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true,
}

const SliderArea = () => {
    const sliderRef = useRef(null)
    return (
        <>
            <section className="tp-text-slider-area fix pt-100 pb-100">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-lg-10">
                            <div className="tp-text-slider">
                                <Slider {...setting} ref={sliderRef} className="tp-text-active">
                                    {slider_data.map((item, i) =>
                                        <div key={i} className="tp-text-item">
                                            <div className="tp-text-slider-wrapper">
                                                <div className="tp-text-slider-item d-flex align-items-center">
                                                    <Image src={icon} alt="theme-pure" />
                                                    <h3 className="text-title">{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderArea;