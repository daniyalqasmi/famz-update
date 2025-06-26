import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from "@assets/img/services/service-details/image.jpg";
import service_video_thumb2 from "@assets/img/services/service-details/img2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const service_details_content = {
   service_details_tab: [
      { id: 1, title: "Our Company", active: "active" },

   ],
   title: <>Our Story</>,
   description: <>FAMZ  was founded in 1998 in Texas, USA, by a group of
      passionate  professionals who recognized the critical need
      for reliable, high-quality aircraft spare parts and maintenance
      services. From the outset, our founders were driven by a mission to
      enhance the safety, reliability, and efficiency of aircraft operations
      worldwide

   </>,
   description_5: <>In the early days, the  industry was rapidly evolving, with
      increasing demand for both commercial and private aircraft. Our
      founders faced numerous challenges, from sourcing rare spare parts
      to establishing trust with potential clients. Despite these hurdles,
      their unwavering dedication and commitment to excellence set the
      foundation for what FAMZ  would become.</>,
   title_1: <>Our Mission</>,

   title_2: <>Our Mission and Vision</>,

   description_2: <>Our mission is to provide unparalleled service and support to the
      industry, ensuring the safety, reliability, and efficiency of
      aircraft operations. Our vision is to be the preferred global partner
      for aircraft parts and maintenance services, recognized for our
      excellence, innovation, and commitment to customer satisfaction.</>,

   title_3: <>Looking Ahead</>,

   description_3: <>As we look to the future, FAMZ  remains committed to our
      core values of excellence, integrity, customer focus, innovation,
      and safety. We continue to expand our capabilities, forge new
      partnerships, and invest in the latest technologies to better serve
      our clients. Our goal is to keep aircraft in the air, safely and
      efficiently, for years to come</>,
   title_4: <>Philosophy</>,
   description_4: <>At FAMZ , our philosophy is centered around the belief that the
      industry thrives on precision, trust, and continuous
      improvement. We understand the critical role that our services play in
      ensuring the safety and efficiency of aircraft operations. Therefore, our
      approach is built on several core principles:
   </>,
   title_5: <>Customer-Centric Approach: </>,
   description_6: <>We believe that our customers are our most
      valuable assets. Our success is directly tied to their satisfaction, which is
      why we go above and beyond to meet their needs. We listen actively,
      respond promptly, and provide personalized solutions that address
      specific requirements.
   </>,
   title_6: <>Commitment to Quality:</>,
   description_7: <>Quality is non-negotiable at FAMZ . From
      the sourcing of spare parts to the execution of repair and maintenance
      services, every step is governed by stringent quality control measures. We
      ensure that all parts and services meet or exceed industry standards and
      regulatory requirements.
   </>,
   title_7: <>Innovation and Adaptability:</>,
   description_8: <>The  industry is dynamic, with new
      challenges and advancements emerging regularly. We foster a culture of
      innovation and adaptability, encouraging our team to embrace new
      technologies and methodologies. This proactive approach enables us to
      stay ahead of industry trends and continuously enhance our service
      offerings.</>,
}
// const { service_details_tab, title, description, title_1, title_2, title_3, title_4, title_5, title_6, title_7, description_2, description_3, description_4, description_5, description_6, description_7, feture_list, description_8, description_9 } = service_details_content

const ServiceDetailsArea = () => {
   const [activeTab, setActiveTab] = useState(0);

   const tabs = [
      {
         title: "Aviation",
         content: (
            <>
               <p><strong>FAMZ</strong> delivers reliable aviation solutions, focusing on the supply and maintenance of top-quality aircraft spare parts and equipment.</p>
               <p>We support both <strong>commercial and private aircraft operators</strong> with:</p>
               <ul>
                  <li><strong>Aircraft Spare Part Sourcing</strong> – Including rare and mission-critical components.</li>
                  <li><strong>Maintenance Services</strong> – Routine and emergency support by certified engineers.</li>
                  <li><strong>Regulatory Compliance</strong> – All components meet strict aviation standards.</li>
               </ul>
               <p>We collaborate with international manufacturers to offer everything from mechanical components to high-tech avionics.</p>
            </>
         )
      },
      {
         title: "Medical",
         content: (
            <>
               <p><strong>FAMZ</strong> provides turnkey healthcare solutions for hospitals, clinics, and diagnostic centers across public and private sectors.</p>
               <p>We specialize in:</p>
               <ul>
                  <li><strong>Medical Equipment Supply</strong> – Therapeutic, diagnostic, and life-saving tools.</li>
                  <li><strong>Hospital Planning</strong> – Layout, infrastructure setup, and full facility development.</li>
                  <li><strong>Maintenance & Training</strong> – Reliable after-sales support and operational training.</li>
               </ul>
               <p>With 15+ years of expertise, we ensure high-performance healthcare environments.</p>
            </>
         )
      },
      {
         title: "Software Development",
         content: (
            <>
               <p>FAMZ specializes in developing innovative software solutions tailored to meet the unique needs of various industries. Our software development team works closely with clients to create custom web and mobile applications, enterprise-level systems, and AI-driven automation tools. We ensure that our software solutions enhance operational efficiency, improve user experience, and meet the highest standards of security and scalability.</p>

               <p>From automating business processes to building e-commerce platforms and AI-powered chatbots, FAMZ leverages the latest technologies to deliver cutting-edge solutions. Our services include everything from initial software design to post-launch support, ensuring that our clients benefit from reliable, future-proof software systems that drive business growth.</p>

               <h4>Key Offerings:</h4>
               <ul>
                  <li>Custom Web & Mobile Applications: Tailored software to meet specific business needs.</li>
                  <li>AI & Automation Solutions: Intelligent systems that automate tasks and improve operational efficiency.</li>
                  <li>Enterprise Software: Robust, scalable systems for managing complex business operations.</li>
                  <li>E-commerce Development: Building user-friendly, secure online stores with integrated payment systems.</li>
                  <li>Digital Marketing</li>
               </ul>
            </>
         )
      },
      {
         title: "Digital Services",
         content: (
            <>
               <h4>🌐 Website Development</h4>
               <ul>
                  <li>Frontend & backend development</li>
                  <li>CMS integration (e.g., WordPress, Shopify)</li>
                  <li>High-performance and SEO-ready websites</li>
               </ul>

               <h4>📈 SEO (Search Engine Optimization)</h4>
               <ul>
                  <li>On-page & off-page SEO</li>
                  <li>Keyword analysis and content optimization</li>
                  <li>Technical SEO audits and reporting</li>
               </ul>

               <h4>📢 Digital Marketing</h4>
               <ul>
                  <li>Social media marketing (Facebook, Instagram, LinkedIn)</li>
                  <li>Google Ads & PPC campaigns</li>
                  <li>Email marketing and lead generation</li>
               </ul>

               <h4>🤖 AI Chatbots</h4>
               <ul>
                  <li>Smart, human-like chatbots</li>
                  <li>Integration with websites, apps, and WhatsApp</li>
                  <li>AI-powered learning and analytics</li>
               </ul>

               <h4>💻 Domain & Hosting Services</h4>
               <ul>
                  <li>Domain registration</li>
                  <li>Cloud and shared hosting</li>
                  <li>SSL, backups, and performance optimization</li>
               </ul>
            </>
         )
      },
      {
         title: "Design & Media",
         content: (
            <>
               <h4>🎨 Graphic Design</h4>
               <ul>
                  <li>Logos, brochures, and business cards</li>
                  <li>Social media creatives & ad banners</li>
                  <li>Infographics and presentations</li>
               </ul>

               <h4>🎬 Video & Animation</h4>
               <ul>
                  <li>Corporate videos, promos, and explainers</li>
                  <li>2D & 3D animation</li>
                  <li>Custom scripts, voiceovers, and editing</li>
               </ul>

               <h4>🧍 Character Animation</h4>
               <ul>
                  <li>Custom-designed animated characters</li>
                  <li>Ideal for branding, education, and entertainment</li>
                  <li>Voice sync, expressions, and movements</li>
               </ul>

               <h4>🎨 UI/UX Design</h4>
               <ul>
                  <li>Mobile & web app UI/UX design</li>
                  <li>User flows, wireframes, and prototypes</li>
                  <li>Focus on accessibility and modern aesthetics</li>
               </ul>
            </>
         )
      },

   ];

   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">
                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                 <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="container mx-auto p-4">
                           <div className="flex border-b-2 border-[#003b99] flex-wrap gap-2">
                              {tabs.map((tab, index) => (
                                 <button
                                    key={index}
                                    className={`py-2 px-5 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out
                    ${activeTab === index
                                          ? 'bg-[#0052cc] text-black shadow-md underline underline-offset-4'
                                          : 'bg-[#e0ecff] text-[#003b99] hover:bg-[#007bff] hover:text-white hover:scale-105'}
                  `}
                                    onClick={() => setActiveTab(index)}
                                 >
                                    {tab.title}
                                 </button>
                              ))}
                           </div>

                           <div className="mt-4 p-5 border border-[#0052cc] rounded-lg bg-[#d6e6ff] text-[#002244] transition-opacity duration-300">
                              {tabs[activeTab].content}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         {/* video modal start */}
         {/* <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            /> */}
         {/* video modal end */}
      </>
   );
};

export default ServiceDetailsArea;