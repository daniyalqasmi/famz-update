import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Decorative shapes
import testimonial_shape_1 from '@assets/img/testimonial/home-3/shape-1.png';
import testimonial_shape_2 from '@assets/img/testimonial/home-3/shape-2.png';

// Static images beside the slider
import testimonial_img_1 from '@assets/img/testimonial/home-3/img-2.png';
import testimonial_img_2 from '@assets/img/testimonial/home-3/img-3.png';

// Slider thumbnails
import testimonial_slider_img_1 from '@assets/img/testimonial/home-3/img-1.png';
import testimonial_slider_img_2 from '@assets/img/testimonial/home-3/img-2.jpg';
import testimonial_slider_img_3 from '@assets/img/testimonial/home-3/img-3.jpg';
import testimonial_slider_img_4 from '@assets/img/testimonial/home-3/img-4.jpg';

/**
 * Image slides & testimonial copy
 * Keeping arrays the same length ensures perfect syncing.
 */
const sliderImg = [
  testimonial_slider_img_1,
  testimonial_slider_img_2,
  testimonial_slider_img_3,
  testimonial_slider_img_4,
];

const sliderText = [
  (
    <>
      Denouncing <span>pleasure</span> and praising pain was <br /> born and I will give you a complete account <br /> of the system, and expound the actual <br /> teachings of the great explorer of truth the <br /> master builder
    </>
  ),
  (
    <>
      Ennings appetite disposed me an at <span>subjects</span> an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
    </>
  ),
  (
    <>
      Maximum consultation discover <span>apartments</span>. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts.
    </>
  ),
  (
    <>
      The system, and expound the <span>actual Denouncing</span> pleasure and praising pain was born and I will give you a complete account of teachings of the great explorer of truth the master builder
    </>
  ),
];

/**
 * Splide configuration objects
 */
const imgSliderOpts = {
  gap: 0,
  pagination: false,
  arrows: false,
  type: 'loop',
  perPage: 1,
  isNavigation: true,
};

const textSliderOpts = {
  pagination: true,
  arrows: false,
  type: 'loop',
  breakpoints: {
    576: { perPage: 1 },
  },
};

/**
 * TestimonialArea component – synced image & text carousels.
 */
const TestimonialArea = () => {
  const imgRef = useRef(null); // main images
  const textRef = useRef(null); // text thumbs

  /**
   * Sync the two Splide instances once both are mounted.
   */
  useEffect(() => {
    if (imgRef.current && textRef.current) {
      imgRef.current?.splide?.sync(textRef.current.splide);
    }
  }, []);

  return (
    <section className="tp-testimonial-3-area pb-120">
      {/* Decorative background box & shapes */}
      <div className="tp-testimonial-3-large-box" />
      <div className="tp-testimonial-3-shape">
        <Image className="shape-1" src={testimonial_shape_1} alt="decorative shape 1" />
        <Image className="shape-2" src={testimonial_shape_2} alt="decorative shape 2" />
      </div>

      <div className="container">
        <div className="row">
          {/* Image / Thumbnail Slider */}
          <div className="col-xl-5 col-lg-4">
            <div className="tp-testimonial-3-wrapper">
              <div className="tp-testimonial-3-wrapper-thumb p-relative">
                <Splide
                  options={{ ...imgSliderOpts }}
                  ref={imgRef}
                  aria-label="Testimonial thumbnails. Selecting a thumbnail changes the testimonial text."
                  className="testimonial-navigation-active splide z-index-1 border-0"
                >
                  {sliderImg.map((src, i) => (
                    <SplideSlide key={i}>
                      <Image className="slide" src={src} alt={`Testimonial thumbnail ${i + 1}`} />
                    </SplideSlide>
                  ))}
                </Splide>

                {/* Foreground decorative images */}
                <Image className="shape-1" src={testimonial_img_1} alt="foreground shape 1" />
                <Image className="shape-2" src={testimonial_img_2} alt="foreground shape 2" />
              </div>
            </div>
          </div>

          {/* Text Slider */}
          <div className="col-xl-7 col-lg-8">
            <div className="tp-testimonial-3-content">
              <Splide
                options={{ ...textSliderOpts }}
                ref={textRef}
                className="testimonial-3-active splide"
              >
                {sliderText.map((node, index) => (
                  <SplideSlide key={index}>
                    <div className="tp-testimonial-3-slider-wrapper">
                      <p>{node}</p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>

              {/* Author block */}
              <div className="tp-testimonial-3-descreiption text-start text-sm-end">
                <h4 className="testimonial-title">Mathias Herasen</h4>
                <p>
                  Founder of <span>GamerPay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
