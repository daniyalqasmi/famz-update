'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Corporate Website',
    category: 'WordPress',
    image: '/portfolio/project1.jpg',
    link: 'https://example-wordpress-site.com',
    description: 'A modern business site built with Elementor & WooCommerce.',
    stack: ['WordPress', 'Elementor', 'WooCommerce'],
  },
  {
    id: 2,
    title: 'E-commerce Store',
    category: 'Next.js',
    image: '/portfolio/project2.jpg',
    link: 'https://example-nextjs-store.com',
    description: 'Headless e-commerce built using Next.js and Stripe.',
    stack: ['Next.js', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 3,
    title: 'Landing Page',
    category: 'HTML',
    image: '/portfolio/project3.jpg',
    link: 'https://example-html-landing.com',
    description: 'Clean responsive landing page for a SaaS marketing site.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
];

const categories = ['All', 'WordPress', 'Next.js', 'HTML'];

const Projects_details = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="min-h-screen bg-white text-black py-20 px-6 items-center ">
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
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2 text-sm font-medium transition rounded-full border ${
              activeCategory === cat
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-3 rounded-full bg-black"
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
          className="inline-block mt-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition"
        >
          Let’s Work Together →
        </a>
      </motion.div>
    </section>
  );
};

export default Projects_details;
