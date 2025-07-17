import aviation_services_data from '@/src/data/aviation_services_data'; 
import AngleArrow from '../../svg/angle-arrow';                      
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AviationServiceArea = () => {
  const BASE_PATH = '/aviation-services'; 

  return (
    <>
      <section className="tp-service-breadcrumb-area p-relative pt-120">
        <div className="container">
          {/* -------- Top Heading -------- */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-service-breadcrumb-title-wrapper">
                <span className="tp-section-title__pre">
                  Innovative <span className="title-pre-color">Areeba</span> Daniyal
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  Leading Digital <span className="title-color">Technology</span>
                  <br /> Agency Empowering People
                </h3>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
                <p>
                  As buildings became more complex, the field of architecture evolved
                  into a multi‑disciplinary domain, integrating advanced technological
                  expertise.
                </p>
              </div>
            </div>
          </div>

          {/* -------- Services Grid -------- */}
          <div className="row">
            {aviation_services_data.map((item) => (
              <div key={item.slug} className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-service-3-content breadcrumb-item mb-30">
                  <div className="tp-service-3-content-thumb">
                    <Image src={item.icon} alt={item.title} width={60} height={60} />
                  </div>

                  <h4 className="tp-service-breadcrumb-title">
                    <Link href={`${BASE_PATH}/${item.slug}`}>{item.title}</Link>
                  </h4>

                  <p>{item.description}</p>

                  <div className="tp-service-btn">
                    <Link href={`${BASE_PATH}/${item.slug}`}>
                      Read More <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* -------- Contact Section -------- */}
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="tp-about-call fadeUp">
                <a href="tel:+923162197618">
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    Provide IT services to hundreds customers <span>+92 316 2197618</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AviationServiceArea;
 