'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Globe,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Target,
  Shield,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const developers = [
  {
    name: 'Husnain Mazhar',
    role: 'Full Stack Developer',
    description:
      'Passionate about creating innovative solutions and beautiful user experiences. Building tools that make a difference.',
    portfolio: 'https://husnainmazhar.com/',
    linkedin: 'https://linkedin.com/in/husnain-mazhar',
    avatar:
      'https://blogger.googleusercontent.com/img/a/AVvXsEgKK4DXZac12kWzKnZhM6PJB5KayFroA7giRVAuiBXA8-UApBmMKJFCtmQd0O1LHNmoNIoHw3q5sTlcRIhq-oAkx8tJkiB5p5wSEInDRKy9Ifq7BGfBUIt47IazpTVA1F2Ap08TsnqjSvpTc3CCY6EnwWxX8H97ioG224X8HWM97ISDCRhWgzH6yt2IO0E',
  },
  {
    name: 'Aimen Ansari',
    role: 'Frontend Developer & UI/UX Designer',
    description:
      'Dedicated to crafting intuitive interfaces and seamless user journeys. Turning complex problems into simple solutions.',
    portfolio: 'https://aimenansari.site/',
    linkedin: 'https://www.linkedin.com/in/aimen92/',
    avatar:
      'https://blogger.googleusercontent.com/img/a/AVvXsEilw1J1gxN17Vyr8QJ7kSpkhZTu4yjsq8IQg-KtGqs6phtdRWQ_Rf4BwVgHHbSpcRhmmRR9UcvLXav-GMhVjgJZDkOy2g_g-azweDK4EieRCfajeBn1fz0gyABqnGu-ufAAwTMpYVkNgyKHzkR1CPCqatpYoR2_NWiD3SELr9vgWw30rxgJ2eki9TsEX9s',
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Student-First Approach',
    description: 'Built by students, for students. We understand what you need.',
  },
  {
    icon: Target,
    title: '100% Accurate',
    description: 'Follows official USKT grading policy to the exact specification.',
  },
  {
    icon: Shield,
    title: 'Private & Free',
    description: 'No data collection, no sign-up, completely free to use.',
  },
];

const About = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          We are a team of passionate developers dedicated to helping University
          of Sialkot students track their academic progress with ease and accuracy.
        </motion.p>
      </motion.div>

      {/* Mission / Highlights */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Development Team */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          Meet the Team
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {developers.map((developer, i) => (
            <motion.div
              key={developer.name}
              variants={fadeInUp}
              custom={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={developer.avatar}
                  alt={developer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/50 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {developer.name}
                  </h3>
                  <p className="text-amber-300 font-medium text-sm mb-2">
                    {developer.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {developer.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={developer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/30 rounded-lg text-amber-300 hover:text-amber-200 transition-all duration-200 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Portfolio
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-300 hover:text-blue-200 transition-all duration-200 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
