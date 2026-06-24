'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator,
  GraduationCap,
  TrendingUp,
  Award,
  ArrowRight,
  BookOpen,
  Sparkles,
  BarChart3,
  Users,
  CheckCircle,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    icon: Calculator,
    title: 'GPA Calculator',
    description: 'Calculate your semester GPA instantly with our intuitive tool.',
    link: '/gpa',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'CGPA Calculator',
    description: 'Track your cumulative performance across all semesters.',
    link: '/cgpa',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Grading Policy',
    description: 'View the official USKT grading system and policies.',
    link: '/gpa',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'Official Standards',
    description: 'Based on the exact University of Sialkot grading scheme.',
    link: '/about',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { icon: Users, value: '1000+', label: 'Active Students' },
  { icon: CheckCircle, value: '99.9%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: '4.8/5', label: 'User Rating' },
  { icon: Sparkles, value: 'Free', label: 'Always Ad-Free' },
];

const Home = () => {
  return (
    <div className="space-y-24 pb-16">
      <section className="relative pt-12 md:pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              University of Sialkot Official Tool
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              GPA & CGPA
            </span>
            <br />
            <span className="text-white">Calculator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Effortlessly calculate and track your academic performance with our
            accurate, user-friendly tool built specifically for University of
            Sialkot students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/gpa"
              className="group bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-xl"
            >
              <Calculator className="w-6 h-6" />
              Calculate GPA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cgpa"
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6" />
              Calculate CGPA
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:block"
          >
            {['A+', 'A', 'B+', 'B'].map((grade, i) => {
              const animations = {
                'A+': { y: [0, -14, 0], x: [0, 0, 0] },
                'A': { y: [0, 0, 0], x: [0, 12, 0] },
                'B+': { y: [0, -10, 0], x: [0, 8, 0] },
                'B': { y: [0, 0, 0], x: [-20, -20, 0] },
              };
              return (
                <motion.div
                  key={grade}
                  className="absolute px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg font-bold text-white text-sm"
                  style={{
                    top: grade === 'B' ? '78%' : `${10 + i * 20}%`,
                    right: `${5 + (i % 2) * 15}%`,
                  }}
                  animate={animations[grade]}
                  transition={{ duration: 3.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {grade}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Powerful tools to help you track and improve your academic performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp} custom={i}>
                <Link
                  href={feature.link}
                  className="block group h-full"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:-translate-y-1 h-full">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <GraduationCap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Check Your Grades?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start calculating your GPA or CGPA now. No sign-up required,
            completely free, and always ad-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gpa"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/50 px-8 py-4 rounded-2xl transition-all duration-300 font-medium"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
