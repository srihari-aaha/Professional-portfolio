import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'E-LEARNING APP',
    category: 'E-LEARNING PLATFORM',
    description:
      'A cross-platform educational mobile application offering interactive video-based learning with multilingual support and age-specific content personalization. Features secure user authentication, seamless video streaming, and Google Play Billing integration for premium learning content.',
    tech: [
      'React Native',
      'Android Studio',
      'Node.js',
      'Express.js',
      'My SQL',
      'Redux Toolkit',
      'react-native-reanimated',
      'Google Play Billing',
      'JWT',
      'REST APIs',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'ANDROID' },
      { label: 'ENGINE', value: 'React Native' },
      { label: 'IN-APP PURCHASES', value: 'google play billing' },
    ],
  },
  {
    number: '02',
    title: 'E-Commerce Platform',
    category: 'E-Commerce Platform',
    description:
      'A cross-platform mobile shopping application that enables users to browse products, explore categories, search items, and manage shopping carts seamlessly. Features secure authentication, real-time product management, order processing, and seamless backend integration for an enhanced shopping experience.',
    tech: [
      'React Native',
      'Javascript',
      'Android Studio',
      'Node JS',
      'Express JS',
      'Rest APIs',
      'react-native-reanimated',
      'MySQL',
      'Stripe',
      'JWT',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'Android & IOS' },
      { label: 'ENGINE', value: 'React Native' },
      { label: 'PAYMENTS', value: 'Stripe' },
    ],
  },
  {
    number: '03',
    title: 'Inventory Management',
    category: 'CLOUD / DISTRIBUTED SYSTEM',
    description:
      'A smart inventory management platform designed to track incoming and outgoing stock, monitor recycled items, and manage product expiry dates. Features real-time stock monitoring, inventory updates, and insightful analytics to improve resource utilization, minimize waste, and streamline warehouse operations.',
    tech: [
      'React js',
      'Javascript',
      'Node.js',
      'Express.js',
      'MySQL',
      'React',
      'JWT',
      'REST APIs',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'Web' },
      { label: 'ENGINE', value: 'React' },
      { label: 'PAYMENT', value: 'Stripe' },
    ],
  },
  // {
  //   number: '04',
  //   title: 'Payment Gateway with Hosted Checkout',
  //   category: 'FINTECH / PAYMENT SYSTEMS',
  //   description:
  //     'End-to-end hosted payment gateway infrastructure supporting seamless merchant order generation, multi-currency processing, and secure consumer checkout via UPI and Cards with webhook transaction verification.',
  //   tech: [
  //     'Node.js',
  //     'Spring Boot',
  //     'PostgreSQL',
  //     'React',
  //     'Docker',
  //     'REST APIs',
  //     'UPI / Card Integrations',
  //   ],
  //   metrics: [
  //     { label: 'PROTOCOLS', value: 'UPI & Cards' },
  //     { label: 'BACKEND', value: 'Spring Boot + Node' },
  //     { label: 'DATABASE', value: 'ACID PostgreSQL' },
  //   ],
  // },
];

export const ProjectsSection: React.FC = () => {
  const techRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: techRef });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-10 pb-6 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          {/* <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p> */}
        </motion.div>

        {/* React Bits Stacking Deck */}
        <div className="scroll-stack-scroller">
          <div className="scroll-stack-inner">
            <ScrollStack
              itemDistance={100}
              itemScale={0.04}
              itemStackDistance={28}
              stackPosition="15%"
              baseScale={0.88}
              dimAmount={0.2}
              holdDistance={0}
              useWindowScroll={true}
            >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />


                {/* Background design overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] opacity-60 pointer-events-none bg-fixed" />
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div ref={techRef} className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25" style={{ y }}>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                    
                      <span className="text-xs">↗</span>
                    </a> */}
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>

      </div>
    </section>
  );
};

export default ProjectsSection;