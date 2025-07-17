'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from '@/src/layout/headers/header';
import FooterThree from '@/src/layout/footers/footer-3';
import AngleArrow from '@/src/svg/angle-arrow';

const projects = [
  {
    id: 1,
    title: 'Tangeloes',
    category: 'WordPress',
    image: '/portfolio/project1.jpg',
    link: 'https://tangeloes.com/',
    description: 'Elegant product-focused website for a fruit business, built using WordPress and WooCommerce with a clean UI.',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
  },
  {
    id: 2,
    title: 'Fruit and Veg',
    category: 'WordPress',
    image: '/portfolio/project2.jpg',
    link: 'https://www.fruitandveg.co.uk/',
    description: 'Fresh produce e-commerce store with an intuitive shopping experience and responsive design.',
    stack: ['WordPress', 'WooCommerce'],
  },
  {
    id: 3,
    title: 'Nooni Theme Demo',
    category: 'WordPress',
    image: '/portfolio/project3.jpg',
    link: 'https://demo.theme-sky.com/nooni/',
    description: 'Customized theme showcase for modern UI and product listing layout using WordPress.',
    stack: ['WordPress', 'Theme Customization'],
  },
  {
    id: 4,
    title: 'Airport Driven',
    category: 'WordPress',
    image: '/portfolio/project4.jpg',
    link: 'https://www.airportdriven.com/',
    description: 'Booking and service interface for a transport service, developed with responsiveness and accessibility in mind.',
    stack: ['WordPress', 'Elementor'],
  },
  {
    id: 5,
    title: 'Famz Multi-Services',
    category: 'Frontend',
    image: '/portfolio/project5.jpg',
    link: 'https://famz.net.pk/',
    description: 'Professional services business profile site with custom frontend features and responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'M-Nine UI Showcase',
    category: 'Next.js',
    image: '/portfolio/project6.jpg',
    link: 'https://m-nine-nu.vercel.app/',
    description: 'Modern and clean UI showcase built with Next.js and Tailwind CSS.',
    stack: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 7,
    title: 'Innoscribe Landing Page',
    category: 'Next.js',
    image: '/portfolio/project7.jpg',
    link: 'https://www.innoscribe.no/',
    description: 'Tech company landing page built using Next.js with smooth scroll and elegant layout.',
    stack: ['Next.js', 'SCSS'],
  },
  {
    id: 8,
    title: 'E-Commerce Demo',
    category: 'Next.js',
    image: '/portfolio/project8.jpg',
    link: 'https://ecommerce-website-ten-omega.vercel.app/',
    description: 'Headless e-commerce prototype built with Next.js, Stripe integration, and cart functionality.',
    stack: ['Next.js', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 9,
    title: 'Programmiers Portfolio',
    category: 'Next.js',
    image: '/portfolio/project9.jpg',
    link: 'https://programmiers.vercel.app/',
    description: 'Developer portfolio template featuring animations and clean UI components.',
    stack: ['Next.js', 'Framer Motion'],
  },
  {
    id: 10,
    title: 'Restaurant Site',
    category: 'HTML',
    image: '/portfolio/project10.jpg',
    link: 'https://mdq-restaurant.vercel.app/',
    description: 'Restaurant UI design with a focus on menu presentation and responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },

];

const categories = ['All', 'WordPress', 'Next.js', 'HTML'];

const Softandweb = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <HeaderOne />
      <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
      <div className='tp-service-breadcrumb-area p-relative pt-120 container '>

        <div className="row align-items-center ">
          <div className="col-lg-6">
            <div className="tp-service-breadcrumb-title-wrapper">
              <span className="tp-section-title__pre">
                Innovative <span className='title-pre-color'>Areeba</span> Daniyal
                <AngleArrow />
              </span>
              <h3 className="tp-section-title">
                Leading Digital <span className='title-color'>Technology</span><br /> Agency Empowering People
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
              <p>
                As buildings became more complex, the field of architecture evolved into a multi-disciplinary domain, integrating advanced technological expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen bg-white text-black py-20 px-6 items-center container">
        {/* Header */}
        <motion.div
          className="text-center  mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-500">
            Here’s a glimpse of some projects I’ve proudly built using modern technologies.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-10 container items-center text-center ">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 text-lg   font-bold transition rounded-full border ${activeCategory === cat
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                } `}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-3 rounded-full bg-black "
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="relative group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Optional CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Like what you see?
          </h3>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-3 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition"
          >
            Let’s Work Together →
          </a>
        </motion.div>
      </section>

      <FooterThree />
    </>
  );
};

export default Softandweb;
