import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = {
    contact_us: <> Contact us at <span>info@famz.net.pk</span></>,
    mail: "info@famz.net.pk",
    contact_text: "PERFECT Platform for all your MRO, supply chain, worldwide.",
    phone: "+92 331 2788903",
    info: <>FAMZ - Madical & Aviation Aerospace Corporation. Excellence in MRO, supply chain, worldwide.</>,
    map: "https://www.google.com/maps/place/FAMZ/@24.8844045,67.1249211,18.69z/data=!4m6!3m5!1s0x3eb3397205af7677:0x9c2d3bab97965b42!8m2!3d24.8846217!4d67.1256706!16s%2Fg%2F11n0pbgynd?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D",
    address: <>Qualman Consultants, <br /> Drigh Road Drigh Colony <br /> Shah Faisal Colony, Karachi, Karachi City, Sindh</>,
    mail_2: "info@famz.net.pk",
    mail_phone: <> info@famz.net.pk <br /> +92 331 2788903</>,


    service_links: [
        "FAMZ Presence",
        "Commercial",
        "Aircraft Parts",
        "Executive",
        "Aerospace Metals",
        "Hospital Beds",
        "",
        "",
        "",
        "Defense",
    ]



}
const { contact_us, mail, contact_text, phone, info, map, address, mail_2, mail_phone, service_links } = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}></div>
                <div className="tp-footer-top-shape" style={{ backgroundImage: `url(/assets/img/footer/footer-top-bg.png)` }}></div>

                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-contact">
                                            <a href={`mailto:${mail}`}>{contact_us}</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                            <div className="tp-footer-top-right-headphone">
                                                <Image src={headphone} alt="theme-pure" width={100}/>
                                            </div>
                                            <div className="tp-footer-top-right-content">
                                                <p>{contact_text}</p>
                                                <a href={`tel:${phone}`}>+92 331 2788903</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                    <div className="tp-footer-logo">
                                        <a href="index.html"> <Image src={footer_logo} alt="theme-pure" /></a>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p>{info}</p>
                                            <div className="tp-footer-main-location">
                                                <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i>
                                                    {address}</a>
                                            </div>
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${mail_2}`}>
                                                    <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                    <h3 className="tp-footer-widget-title">Services</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((link, i) => <li key={i}><Link href="#">{link}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                    <h3 className="tp-footer-widget-title">Contact Info</h3>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-author d-flex">
                                            <div className="tp-footer-author-thumb">
                                                <Image src={user} alt="theme-pure" width={100}/>
                                            </div>
                                            <div className="tp-footer-author-content">
                                                <span>Chat With Expert <br /> Active Now</span>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><Link href="#">Upgrades and Modernizations</Link></li>
                                            <li><Link href="#">Aircraft Parts</Link></li>
                                            <li><Link href="#">Executive</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                                    <div className="tp-footer-from">
                                        <div className="tp-footer-text-email p-relative">
                                            <input type="text" placeholder="Enter Email Address" />
                                            <span>
                                                <EmailAeroplan />
                                            </span>
                                        </div>
                                        <div className="tp-footer-form-check">
                                            <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to all your terms and policies
                                            </label>
                                        </div>
                                        <div className="tp-footer-widget-social">
                                            <SocialLinks />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                    <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                    <Link href="#">Terms and conditions</Link>
                                    <Link className="ml-50" href="#"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;